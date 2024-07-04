"use client"
import { useEffect, useState,useRef } from "react";
import Card from "@/components/Card/Card";
import {  Container, Row } from "react-bootstrap";
import CustomModal from "@/components/CustomModal";

export default function New (){
    const state = useRef({
        events: [],
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:44329/api/events'); 
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const result = await response.json();
            state.current.events =  [...result.Records];
            console.log(result.Records)
        } catch (error) {
            setError(error.message);
            
        } finally {
            setLoading(false);
        }
        };
        fetchData();

        
    }, []);

    if(error){
        console.error(error);
    }
    
    return (

        <Container >
            <Row className="mt-4 d-flex flex-row justify-content-center gap-5">
               
                { state.current.events.map( e => (
                    console.log(e.Title),
                    <Card 
                        key= {e.Id}
                        card = {e}
                    />  
                ))}
            </Row>
            <CustomModal></CustomModal>
        </Container>

    );
}