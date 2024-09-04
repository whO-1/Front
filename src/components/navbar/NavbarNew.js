import Link from 'next/link';
import { Image } from 'react-bootstrap';
import CustomDropdown from '@/components/navbar/CustomDropdown';
import ToggleButton from '@/components/navbar/ToggleButton';
import "./style.css"

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

export default function NavbarNew({ data }) {
    const headLinks = (collection) => collection.filter( el => el.HeadId === null );
    const isDropdown = (head) => ( state.links.filter( el => el.HeadId === head.Id ).length > 0)? true:false;
    const state = ( data !== null)? 
            {
                links: [...data.Records],
                headLinks : headLinks(data.Records)
            }
        : 
            null;

    
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <a href="/" className="logo d-flex align-items-center me-auto">
                        <Image src="/images/svg/logo-white.svg" alt="logo"/>
                        {/* <h1 className="sitename">EventPlanner</h1> */}
                    </a>
                    <nav id="navmenu" className="navmenu">
                       
                        <ul>
                            {
                                (state !== null)?
                                    state.headLinks.map( el => (
                                        (isDropdown(el))?
                                            <CustomDropdown key={el.Id} props={{
                                                head: el,
                                                sublinks: state.links,
                                            }}/>
                                        : 
                                            <li key={el.Id}>
                                                <a href={el.LinkUrl||""}>{el.LinkTitle||""}</a>
                                            </li>
                                    ))
                                :
                                    ""
                            } 
                        </ul>
                        <ToggleButton />
                    </nav>
                    <Link className="btn btn-outline-light text-success ms-4 me-4" href={adminUrl}>Manager</Link>
                </div>
            </header>
        </>
    )
}