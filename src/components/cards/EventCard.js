"use client"
import { useParams } from 'next/navigation';
import { useState,useEffect, useRef } from 'react';
import { Button, Col, Container, Image, Row, Badge, Spinner,Carousel } from "react-bootstrap";
import { format } from 'date-fns';
import "./eventcard.styles.css"
import GoogleMapComponent from '@/modules/GoogleMapComponent';

const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;

export default function EventCard ( ){
    const { id } = useParams();
    const event = useRef({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const imageSrcs= useRef({
        data: []
    });

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

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

    useEffect(() => {
        const fetchAndConvertImage = async (arr) => {
          try {
            const ImagesArr = await Promise.all(
              arr.map(async (el) => {
                const response = await fetch(`${apiUrl}/api/image/${el}`);
                if (response.ok) {
                  const data = await response.json();
                  return `data:image/jpeg;base64,${data.ImageData}`;
                }
                return null; 
              })
            );
            
            imageSrcs.current.data = ImagesArr.filter(Boolean);
          } catch (error) {
            console.error("Error fetching images:", error);
          }
        };
    
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiUrl}/api/events/${id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            event.current = result.Records;
    
            await fetchAndConvertImage(event.current.EventImages);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false); 
          }
        };
    
        fetchData();
      }, [apiUrl, id]);
    
    if(error){
      console.error(error);
      return(
        <Container className='d-flex flex-row justify-content-center align-items-center' style={{height:'50vh'}}>
            <h1>Sorry, item was not found...</h1>
        </Container>
        );
    }
    if( loading ){
        return(
            <Container className='d-flex flex-row justify-content-center align-items-center' style={{minHeight:'50vh'}}>
                <Spinner animation="border" variant="dark" />
            </Container>
        ); 
    }
    else if (!event) {
        return <h3>Error</h3>;
    }
    
    console.log(event.current)
    return(
        <>
            
            <Row className='col-12  m-0 p-0' >
                <Col className=" d-flex justify-content-center col-12 col-lg-6 m-0 p-0" > 
                    {
                        (imageSrcs.length > 0 )?
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                {
                                    imageSrcs.current.data.map( (imgSrc,i)  => {
                                        return (
                                            <Carousel.Item key={i} >
                                                <Image src={imgSrc} alt="image-event"  className='img-fluid h-auto ' style={{objectFit: "cover", minHeight:"80vh"}}/>
                                            </Carousel.Item>
                                        );
                                    })
                                }
                            </Carousel>
                        :
                            <Image src="/assets/img/quote-bg.jpg" alt=""  className='img-fluid h-auto ' style={{objectFit: "cover",  minHeight:"80vh",padding:"0", margin:"0"}}/>
                    }
                    
                </Col>
                <Col className="d-flex flex-column justify-content-start align-items-start py-3 col-12 col-lg-6">
                    <Container className='px-3 py-5'>
                        <h1 className='text-dark'> {event.current.Title} 
                            { 
                                (event.current.AgeGroupName)?
                                    <span className=' p-2 h5'>
                                        <Badge bg={ (event.current.AgeGroupName === "Everyone" )? "success": "warning"} text="light" >{ event.current.AgeGroupName } </Badge> 
                                    </span>
                                :
                                    ""
                            }
                        </h1> 
                        <p className='py-3 mb-5' style={{letterSpacing:"0.3px"}}>{event.current.Description}</p>
                        <h6 className='text-primary '> {formatDate(event.current.StartDate)} </h6>
                        { 
                            ( formatDate(event.current.StartDate) !== formatDate(event.current.EndDate) )?
                                
                                <h6 className='text-primary '> -- {formatDate(event.current.EndDate)} </h6>
                            : 
                                ""
                        }
                        <Row className='d-flex flex-row justify-content-start gap-2  m-0'>
                            {
                                (event.current.SelectedCategories !== null &&  event.current.SelectedCategories !== undefined )?
                                    event.current.SelectedCategories.map(element => (
                                        <Badge key={element} bg="primary" className='w-auto'>{element}</Badge>
                                    ))
                                :
                                    ""
                            }
                        </Row>

                        <Row className="pt-2 mt-4">
                            <Col className='d-flex justify-content-center justify-content-md-start gap-3 '>
                                <Button type="Button" className="btn btn-outline-primary btn-light px-5" size='md'> Share </Button>
                                <div>
                                    <input id="toggle-heart" type="checkbox"/>
                                    <label for="toggle-heart" style={{font:" 1em verdana, sans-serif"}}>❤</label>
                                </div>
                            </Col>
                        </Row>
                        
                    </Container>
                </Col>
            </Row>
          
            <Row className='col-12 m-0 p-0'>
                <Col className=" d-flex justify-content-center col-12 p-0" style={{height:"auto"}}>
                    <GoogleMapComponent lat={event.current.EventLocation.Latitude} long={event.current.EventLocation.Longitude}/>
                </Col>
                
            </Row>
           
        </>
    );
}

