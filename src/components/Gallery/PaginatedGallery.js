"use client"
import CardBase from "@/components/cards/template/CardBase";
import { InheritsFrom } from "@/helpers/ClassHelpers";
import { useRef } from "react";
import CustomPagination from "../pagination/CustomPagination";

const apiUrl = process.env.NEXT_PUBLIC_FETCH_API_URL;
export default function PaginatedGallery({ props, onRefetch }) {
    const GenericCard = props.Child;
    const Props = useRef({
        ...props,
    });
    if(  InheritsFrom(GenericCard , CardBase)  ){
        return(
            <>
                {  
                    (Props.current.error === null && Props.current.data !== null)?
                    <>
                        <div className="col-12 d-flex flex-row justify-content-center pb-5 m-0">
                            <div className="container row ">
                                
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
                        {
                            (Props.current.data.Records.length >= 1)?
                            <div className="container d-flex flex-row justify-content-center">
                                <CustomPagination  
                                    hasPrev = {Props.current.data.HasPreviousPage}
                                    hasNext = {Props.current.data.HasNextPage}
                                    totalPages={Props.current.data.TotalPages}
                                    currentPage={Props.current.data.CurrentPage}
                                    onChangePage = { (page) => {
                                        const newProps = {
                                            Endpoint: `/api/events?search=${encodeURIComponent(Props.current.search)}&filter=${encodeURIComponent(Props.current.filter)}`,
                                            fetchProps: {
                                                cache: 'no-store',
                                                method: "POST",
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'Cache-Control': 'no-cache',
                                                    'Pragma': 'no-cache',
                                                },
                                                body: JSON.stringify({
                                                    PaginationOptions: {
                                                        PageSize: 6,
                                                        CurrentPage: page,
                                                    }
                                                }),
                                            }
                                        };
                                        onRefetch(newProps)
                                    }}
                                />
                            </div>
                            :
                                <div className="container d-flex flex-row justify-content-center"> Ups, nothing to show yet for your search
                                    {
                                        (Props.current.search.length)?
                                        <>
                                            &quot;<i className="text-muted">{Props.current.search}</i> &quot; 
                                        </>
                                        :
                                            " . . ."
                                    }
                                    
                                </div>
                        }
                        
                       
                    </>
                    :
                        <div> Something went wrong, no data available . . . </div>
                } 
            </>
        );
    }
    return null;
}