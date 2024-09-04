
import { Suspense } from "react";

import CustomPage from "@/components/pageComponent/CustomPage";
import Loading from "../loading";
import LoadComponentExtension from "@/extensions/LoadComponentExtension";
import PaginatedGallery from "@/components/gallery/PaginatedGallery";
import CardsGallerySkeleton from "@/components/gallery/CardsGallerySkeleton";
import CategoryCard from "@/components/cards/CategoryCard";
import DynamicPropsGenerator from "@/extensions/DynamicPropsGenerator";
import CustomFormTwo from "@/components/forms/CustomFormTwo";


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
                <div className="page-title dark-background" style={{backgroundImage: "url(assets/img/page-title-bg.jpg)"}}>
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
                <div className="bg-light col-12 p-0 m-0 py-5 d-flex justify-content-center">
                    <div className="col-6">
                        <CustomFormTwo/>
                    </div>
                </div>
                

                <div className="bg-light col-12 p-0 m-0 py-5 " style={{minHeight:"50vh"}}> 
                    <DynamicPropsGenerator>
                        <LoadComponentExtension
                            Component={PaginatedGallery}
                            ComponentProps={{
                              Child: CategoryCard, 
                              Name: "FeedPosts"
                            }}
                            ComponentSkeleton={CardsGallerySkeleton}
                            Endpoint= "/api/events"
                            fetchProps = {{
                              cache: 'no-store',
                              method:"POST",
                              headers: {
                                  'Content-Type': 'application/json',
                                  'Cache-Control': 'no-cache',
                                  'Pragma': 'no-cache',
                              },
                              body: JSON.stringify({
                                  PaginationOptions:{
                                      PageSize: 6,
                                      CurrentPage: 1,
                                  }
                              }),
                            }}
                        />
                    </DynamicPropsGenerator>
                </div>
                


            </CustomPage>
        </Suspense>
        
      </>
    );
  }