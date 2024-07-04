"use client"
import { useRef } from "react";

export default function CustomDropdown ({props}) {
    const state = useRef({
        props: {...props}
    });
    const isDropdown = (head) => ( state.current.props.sublinks.filter( el => el.HeadId === head.Id ).length > 0)? true:false;
    const sublinks = ( head ) => state.current.props.sublinks.filter( el => el.HeadId === head.Id); 
    
    return(
        <>
            {isDropdown( state.current.props.head ) ? 
                
                <li className={`${ (state.current.props.head.HeadId === null )? "nav-item dropdown" : "dropdown-submenu" }`}>
                    {( state.current.props.head.HeadId === null )?
                            <>
                                <a className="nav-link dropdown-toggle " href={state.current.props.head.LinkUrl} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {state.current.props.head.LinkTitle} </a>
                            </>
                         :
                                <a className="dropdown-item dropdown-toggle " href={state.current.props.head.LinkUrl}>{state.current.props.head.LinkTitle}</a>
                    }
                    <ul className="dropdown-menu bg-secondary">
                        {
                            sublinks(state.current.props.head).map( el => (
                                <CustomDropdown  s
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
                <li><a className="dropdown-item text-light" href={state.current.props.head.LinkUrl}>{state.current.props.head.LinkTitle}</a></li>
            }      
        </>
    );
}