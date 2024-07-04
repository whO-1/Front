import "./style.css"
import { Image } from "react-bootstrap";

export default function Card({card}){
    console.log(card.Description)
    return(
        <>
            <div  className= "card">
                {/* <Image src={card.imageSrc} alt="" />               ---- image to be implemented*/}
                <Image src="/images/1.jpg" alt="" /> 
                <div  className="card-content">
                    <h2 className="mb-4"> 
                        {card.Title}
                    </h2>
                    <p>
                        {card.Description}
                    </p>
                    <a href="#"  className="button btn btn-outline-light" type="button" data-toggle="modal" data-target={`#ModalCenter-${card.Id}`}>
                        Read more 
                        <span  className="material-symbols-outlined">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div className="modal fade" id={`#ModalCenter-${card.Id}`} tabIndex="-1" role="dialog" aria-labelledby={`ModalCenter-${card.Id}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id={`#LongTitle-${card.Id}`}>Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    ...
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}