"use client"
import CardBase from "@/components/cards/template/CardBase";
import { InheritsFrom } from "@/helpers/ClassHelpers";
import { useRef } from "react";
const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;

export default function CardsGallery({ props }) {
    const GenericCard = props.Child;
    const Props = useRef({
        ...props,
    });
    if(  InheritsFrom(GenericCard , CardBase)  ){
        return(
            <>
                {  
                    (Props.current.error === null && Props.current.data !== null)?
                        <div className="col-12 d-flex flex-row justify-content-center pb-5 m-0 " >
                            <div className="container row" > 
                                
                                {Props.current.data.Records.map((element, index) => {
                                    return ( 
                                        <GenericCard 
                                            Title={element.Title} 
                                            Description={element.Description} 
                                            Img_Url={ (element.EventImages && element.EventImages.length > 0 )? `${apiUrl}/api/image/${element.EventImages[0]}` : "/assets/img/quote-bg.jpg"} 
                                            key={Props.current.Name + index}
                                            Id={element.Id}
                                        />)
                                })}

                            </div>
                        </div>
                        
                    :
                        <div> Something went wrong, no data available ...</div>
                } 
            </>
        );
    }
    return null;
}