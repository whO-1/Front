"use client"

import { useEffect, useRef, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;

export default function LoadComponentExtension({ 
    Component, 
    ComponentProps = {},
    ComponentSkeleton = null,
    children, 
    Endpoint,
    fetchProps = {
        cache: 'no-store',
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        },
    },
    handleUpdate 
}) {
    const [ loading, setLoading ] = useState(true);

    const handleRefetch = (newProps) => {
        setLoading(true);
        console.log("refetch");
        setTimeout( ()=> {
            handleUpdate(newProps);
        },400);
        
    }

    const state = useRef({
        error : null,   
        data : null,
        search:"",
        filter:""   
    });

    const fetchData = async () => {
        try{
            const result = await fetch(apiUrl+ Endpoint + `?search=${encodeURIComponent(state.current.search)}&filter=${encodeURIComponent(state.current.filter)}`,{
                ...fetchProps,
            });

            if(result.ok){
                state.current.data = await result.json();
            }
            else{
                throw new Error("Not valid response");
            }
        }
        catch(err){
            state.current.error = err;
            console.error("Error at fetch --> "+err.message);
        }
        finally{
            setLoading(false);
        }
    }

    
    useEffect( () => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            state.current.search = urlParams.get('search') || "";
            state.current.filter = urlParams.get('filter') || "";
        }
        fetchData();
    },[]);

    


    return (
        (loading)? 
            (ComponentSkeleton !== null)? 
                <ComponentSkeleton/>
            :
                <div className="container bg-light">
                    <p>Loading...</p>
                </div>
        :
            <Component  props = {{...ComponentProps, ...state.current }} onRefetch ={(page) => handleRefetch(page)}  >  
                {children}
            </Component>
    );

}