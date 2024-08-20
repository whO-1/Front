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
    } 
}) {
    const [ loading, setLoading ] = useState(true);
    const state = useRef({
        error : null,   
        data : null   
    });

    const fetchData = async () => {
        try{
            const result = await fetch(apiUrl+Endpoint,{
                ...fetchProps
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
            <Component  props = {{...ComponentProps, ...state.current }}  >  
                {children}
            </Component>
    );

}