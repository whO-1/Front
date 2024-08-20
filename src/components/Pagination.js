
import { Container } from "react-bootstrap";

export default function Pagination( {HasPreviousPage, HasNextPage, TotalPages, CurrentPage, onPreviosPage, onNextPage, onSelectedPage} ){
    
    const pages = Array.from({ length: TotalPages }, (_, i) => i + 1);
    // console.log("Render Pagination")
    // console.log("CurrentPage",CurrentPage)

    return(
        <Container className="mt-5">
            <nav aria-label="Page navigation" className="w-100">
                <ul className="pagination justify-content-center ">
                  
                    {
                        (HasPreviousPage)?
                        <li className="page-item">
                            <a className="page-link " onClick={ onPreviosPage }>Previous</a>
                        </li>
                        :
                        <li className="page-item disabled">
                            <span className="page-link text-muted ">Previous</span>
                        </li>
                    }
                    
                    {
                        pages.map( page => (
                            ( CurrentPage !== page )?
                                <li key={`page-${page}`} className="page-item">
                                    <a className="page-link" onClick={() => onSelectedPage(page) }>{page}</a>
                                </li>
                            :      
                                <li key={`page-${page}`} className="page-item active" aria-current="page">
                                    <span className="page-link">{page}</span>
                                </li>
                        ))
                    }

                    {
                        (HasNextPage)?
                            <li className="page-item">
                                <a className="page-link" onClick={ onNextPage } >Next</a>
                            </li>
                        :
                            <li className="page-item disabled">
                                <span className="page-link text-muted  ">Next</span>
                            </li>
                    }
                   
                </ul>
            </nav>
        </Container>
    );
}