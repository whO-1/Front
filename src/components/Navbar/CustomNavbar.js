"use client"
import { Navbar, Container, Button } from 'react-bootstrap';
import CustomDropdown from '@/components/Navbar/CustomDropdown';
import { useEffect, useRef,useState } from 'react';
import "./style.css"

export default function CustomNavbar() {
    
    const state = useRef({
        headLinks : [],
        links: [],
    });
    const headLinks = (collection) => collection.filter( el => el.HeadId === null );
    const isDropdown = (head) => ( state.current.links.filter( el => el.HeadId === head.Id ).length > 0)? true:false;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://localhost:44329/api/links'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          state.current.links =  [...result.Records];
          state.current.headLinks = headLinks(result.Records);
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
        <Navbar expand="lg" className="bg-body-tertiary px-5">
            <Navbar.Brand href="/">Ev-Planner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        
                        <ul className="navbar-nav">
                            {
                                state.current.headLinks.map( el => (
                                    (isDropdown(el))?
                                        <CustomDropdown key={el.Id} props={{
                                            head: el,
                                            sublinks: state.current.links,
                                        }}/>
                                    : 
                                        <li className="nav-item" key={el.Id}>
                                            <a className="nav-link" href={el.LinkUrl}>{el.LinkTitle}</a>
                                        </li>
                                )
                            )} 
                        </ul>

                    </Container>
                    <Button variant="outline-dark">Manager</Button>
                </Navbar.Collapse>
        </Navbar>
    );
}