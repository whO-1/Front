import { Suspense } from "react";
import CustomPage from "@/components/pageComponent/CustomPage";
import Loading from "../loading";
import FeedCollection from "@/components/FeedCollection";
import "./styles.css"
import LoadComponentExtension from "@/extensions/LoadComponentExtension";


const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;
export default async function Page() {
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
      <>
        
        <Suspense fallback={<Loading/>}>
            <CustomPage
                data = {navbarLinks}
            >
                <div className="page-title dark-background" data-aos="fade" style={{backgroundImage: "url(assets/img/page-title-bg.jpg)"}}>
                  <div className="container position-relative">
                    <h1>Found Events</h1>
                    <p>Explore and view details of all your upcoming events here.</p>
                    <nav className="breadcrumbs">
                      <ol>
                        <li><a href="/">Home</a></li>
                        <li className="current">Search results</li>
                      </ol>
                    </nav>
                  </div>
                </div>

                <LoadComponentExtension
                    Component={FeedCollection}
                    Endpoint={"/api/events"}
                />

              
              
            
            
            </CustomPage>
        </Suspense>
        
      </>
    );
  }