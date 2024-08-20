"use client"
import { useRef } from "react";

export default function CustomDropdown ({props}) {
    const state = useRef({
        props: {...props}
    });

    const isDropdown = (head) => ( state.current.props.sublinks.filter( el => el.HeadId === head.Id ).length > 0)? true:false;
    const sublinks = ( head ) => state.current.props.sublinks.filter( el => el.HeadId === head.Id); 
    const dropdownMobile = (e) => {
        console.log("click")
        e.preventDefault();
        e.currentTarget.parentNode.classList.toggle('active');
        e.currentTarget.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    }

    return(
        <>
            {isDropdown( state.current.props.head ) ? 
                <li className= "dropdown" >
                    <a className="" href={ state.current.props.head.LinkUrl } > 
                        <span>{state.current.props.head.LinkTitle}</span> 
                            <i className="bi bi-chevron-down toggle-dropdown" onClick={dropdownMobile}></i>
                    </a>
                    
                    <ul className="">
                        {
                            sublinks(state.current.props.head).map( el => (
                                <CustomDropdown  
                                    key={el.Id}
                                    props={{
                                        head: el,
                                        sublinks: state.current.props.sublinks  
                                    }}
                                />
                            ))
                        }
                    </ul>
                </li>

            :
                <li><a className="" href={state.current.props.head.LinkUrl}>{state.current.props.head.LinkTitle}</a></li>
            }      
        </>
    );
}