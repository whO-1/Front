"use client"
import CardBase from "@/components/cards/template/CardBase";
import { InheritsFrom } from "@/helpers/ClassHelpers";
import { useRef } from "react";

export default function CardsGallery({ props }) {
    const GenericCard = props.Child;
    const lineLength = props.LineLength;
    const childProps = {
        Title: "Nature",
        Description: "Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit",
        Img_Url: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
    };
    const state = useRef({
        props
    });
    
    
    if(  InheritsFrom(GenericCard , CardBase)  ){
        return(
            <>
                {  
                    (state.current.props.error === null && state.current.props.data !== null)?
                        state.current.props.data.Records.map(element => {
                            return ( <GenericCard 
                                        Title={element.Title} 
                                        Description={element.Description} 
                                        Img_Url={element.Img_Url} 
                                        key={element.FaqId}
                                    />)
                        })
                    :
                        <div> Something went wrong, no data avialable ...</div>
                } 
            </>
        );
    }
    return null;
}