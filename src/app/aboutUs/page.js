import { Suspense } from "react";
import CustomPage from "@/components/pageComponent/CustomPage";
import Loading from "../loading";
import { Image } from "react-bootstrap";
import Swiper from "@/components/swiper/Swipper";

const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;
export default async function Page(  ) {
    let navbarLinks = null;
    try{
        const response = await fetch(apiUrl+'/api/links',{
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
            },
        });
        const jsonResult = await response.json();
        if(jsonResult !== null){
            navbarLinks = jsonResult;
        }

    }
    catch(err){
        console.error(err.message);
    }  

    
    return(

        <Suspense fallback={<Loading/>}>
            <CustomPage data = {navbarLinks} >
                <div className="page-title dark-background"  style={{backgroundImage: "url(assets/img/aboutUs.jpg)"}}>
                    <div className="container position-relative">
                        <h1>About Us</h1>
                        <p>Find out some information about us and our goals</p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li className="current">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                
                <section id="testimonials" className="testimonials section dark-background">
                    <Image src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt=""/>
                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        
                        <Swiper/>
                
                    </div>
                </section>
            </CustomPage>
    </Suspense>
    );
}