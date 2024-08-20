import { Suspense } from "react";
import CustomPage from "@/components/pageComponent/CustomPage";
import MainComponent from "@/components/mainComponent/MainComponent";
import Loading from "./loading";

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

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <CustomPage
                    data = {navbarLinks}
                >
                    <MainComponent  />
                </CustomPage>
            </Suspense>


            <div id="modal-root" />
        </>
    );
}
