"use client"
import { useParams } from 'next/navigation';
import { useState,useEffect } from 'react';
import { Button, Col, Container, Image, Row, Badge, Spinner } from "react-bootstrap";
import { format } from 'date-fns';
import "./styles.css"
const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;

export default function EventCard ( ){
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const formatDate = (dateStr) => {
        try{
            
            const timestamp = dateStr.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
            if( timestamp ){
                const date = new Date(dateStr);
                return format(date, 'PPP');
            }
            return "";
        }
        catch(err){
            console.error(err.message);
            return "";
        }
    };


    useEffect( () => {
        const fetchData = async () => {
          try {
             setLoading(true);
    
            const response = await fetch(`${apiUrl}/api/events/${id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setEvent( result.Records );
            console.log(result.Records.SelectedCategories);
            
          } catch (error) {
            setError(error.message);
          } 
          finally {
            setLoading(false);
          }

        };
        fetchData();
    },[]);
    
    if(error){
      console.error(error);
      return(
        <Container className='d-flex flex-row justify-content-center align-items-center' style={{height:'50vh'}}>
            <h1>Sorry, item was not found...</h1>
        </Container>
        );
    }
    if(loading){
        return(
            <Container className='d-flex flex-row justify-content-center align-items-center' style={{height:'50vh'}}>
                <Spinner animation="border" variant="dark" />
            </Container>
        ); 
    }
    else if (!event) {
        return <h3>Error</h3>;
    }
    
    return(
        <>
            <Container className='p-2 m-0  d-flex justify-content-center' >
                <Row className='w-100'>
                    <Col className=" d-flex justify-content-center col-12 col-lg-6" style={{minHeight:"50vh"}}> 
                        <Image src="/images/14.png" alt=""  className='img-fluid h-auto ' style={{objectFit: "cover", maxHeight: "500px", borderRadius: "10px"}}/>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start align-items-start py-3 col-12 col-lg-6">
                        <Container>
                            <h1 className='text-dark'> {event.Title} 
                                { 
                                    (event.AgeGroupId !== null && event.AgeGroupId !== undefined)?
                                        <span className=' p-2 h5'>
                                            <Badge bg={ (event.AgeGroupId === 1 )? "success": "warning"} text="light" >{ event.AgeGroupName } </Badge> 
                                        </span>
                                    :
                                        ""
                                }
                            </h1> 
                            <p className='text-secondary'>{event.Description}</p>
                            <br/>
                            <h6 className='text-muted '>Start date: <span className="text-muted  fst-italic">{formatDate(event.StartDate)}</span> </h6>
                            { 
                                ( formatDate(event.StartDate) !== formatDate(event.EndDate) )?
                                    
                                    <h6 className='text-muted '>End date: <span className="text-muted  fst-italic">{formatDate(event.EndDate)}</span> </h6>
                                : 
                                    ""
                            }
                            <Row className='d-flex flex-row justify-content-start gap-2  m-0'>
                                {
                                    (event.SelectedCategories !== null &&  event.SelectedCategories !== undefined )?
                                        event.SelectedCategories.map(element => (
                                            <Badge key={element} bg="dark" className='w-auto'>{element}</Badge>
                                        ))
                                    :
                                        ""
                                }
                            </Row>

                            <Row className=" pt-2 col-4 mt-5">
                                    <Col className='d-flex justify-content-around gap-2'>
                                        <Button type="Button" className="btn btn-primary " size='md'> Share </Button>
                                        <Button type="Button" className="btn btn-outline-danger btn-light " size='xs' > <i className="bi bi-heart-fill"></i> Like </Button>
                                    </Col>
                                    
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        
        </>
    );
}