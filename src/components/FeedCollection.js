"use client"
import { useEffect, useState,useRef } from "react";
import {  Container, Row, Spinner } from "react-bootstrap";
import Card from "@/components/cards/CategoryCard";
import Link from "next/link";
import Pagination from "./pagination/Pagination";
const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;

export default function FeedCollection (){
    //console.log("Render Feed");
    const PageSize = 6;
    const state = useRef({
        Records: []
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const handlePreviosPage = () => {
        setLoading(true);
        if(page > 1){
            setPage(page-1);
        }
        //console.log("Prev page")
    }
    const handleNextPage = () =>{
        setLoading(true);
        if(page <  state.current.TotalPages){
            setPage(page+1)
        }
        //console.log("Next page")  
    }
    const handleSelectedPage = (selectedPage) => {
        setLoading(true);
        if(selectedPage <=  state.current.TotalPages){
            setPage(selectedPage)
        }
        //console.log("Next page")
    }

    useEffect( () => {
        const fetchData = async (currentpage) => {
            try {
                const response = await fetch(apiUrl+`/api/events`,{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify({
                        PageSize,
                        CurrentPage: currentpage,
                    }),
                });
                if (!response.ok) { 
                throw new Error('Network response was not ok');
                }
                const result = await response.json();
                state.current =  {...result};
                state.current.Records =  [...result.Records];
                //console.log(result.Records);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData(page);
    },[page]); 
      
    if(error){
        console.error(error);
    }
    if(loading){
        return (
            <Container className='d-flex flex-row justify-content-center align-items-center' style={{height:'50vh'}}>
                <Spinner animation="border" variant="dark" />
            </Container>
        );
    }

    return (
        <>
            <Container className="py-4" >
                <Row className="mt-4 d-flex flex-row justify-content-center gap-5">
                    { state.current.Records.map( e => (
                        <Link className="card" key={`link-${e.Id}`} href={`/events/${e.Id}`}    >
                            <Card 
                                key= {`card-${e.Id}`}
                                card = {e}
                                className="borderNone"
                            />  
                        </Link>
                    ))}
                </Row>
            </Container>
                    
            { 
                (state.current.TotalPages > 1)?
                    <Pagination
                        onPreviosPage = {handlePreviosPage}
                        onNextPage = {handleNextPage}
                        HasPreviousPage = {state.current.HasPreviousPage}
                        HasNextPage = {state.current.HasNextPage}
                        CurrentPage = {state.current.CurrentPage}
                        TotalPages = {state.current.TotalPages}
                        onSelectedPage = {handleSelectedPage}
                    />
                        :
                    ""
            }
            
        </>
    );
}