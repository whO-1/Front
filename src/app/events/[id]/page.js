
import EventCard from "@/components/cards/EventCard";
import { Suspense } from "react";
import CustomPage from "@/components/pageComponent/CustomPage";
import Loading from "@/app/loading";

const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;
export default async function EventPage() {
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

    return (
      <Suspense fallback={<Loading/>}>
            <CustomPage data = {navbarLinks} >
            <div className="page-title dark-background" data-aos="fade" style={{backgroundImage: "url(assets/img/page-title-bg.jpg)"}}>
                    <div className="container position-relative">
                        <h1>Event Details</h1>
                        <p className="text-light">Get in touch with new people with same mindset..</p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li className="current">Event Details</li>
                            </ol>
                        </nav>
                    </div>
            </div>
            <div className="col-12 m-0 p-0 ">
                <EventCard />
            </div>
          </CustomPage>
      </Suspense >
      
    );
}