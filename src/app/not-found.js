import { Suspense } from "react";
import CustomPage from "@/components/pageComponent/CustomPage";
import Loading from "./loading";

const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;
export default async function Custom404() {
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
                <div className="page-title dark-background" data-aos="fade" style={{backgroundImage: "url(assets/img/page-title-bg.jpg)"}}>
                    <div className="container position-relative">
                        <h1>404 Page</h1>
                        <p>Sorry it seams like this page does not exist yet..</p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li className="current">Not found</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="container py-5 text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <i className="bi bi-exclamation-triangle display-1 text-dark"></i>
                                <h1 className="display-1 text-success">404</h1>
                                <h1 className="mb-4 text-dark">Page Not Found</h1>
                                <p className="mb-4 text-dark">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use navigation links?</p>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomPage>
    </Suspense>
  
  );
}