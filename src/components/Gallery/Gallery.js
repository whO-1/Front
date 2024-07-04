import {Image}  from "react-bootstrap";

export default function Gallery() {
    return(

        <section id="gallery">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card" style={{minHeight: "60vh"}}>
                            <Image src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="Image-fluid card-img-top " style={{height:"85%"}} />
                            <div className="card-body">
                                <h5 className="card-title">Music</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <a href="" className="btn btn-outline-success btn-sm">Check events</a>
                                <a href="" className="btn btn-outline-danger btn-sm "><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card" style={{minHeight: "60vh"}}>
                            <Image src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" className="Image-fluid card-img-top"  style={{height:"85%"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Art</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum.</p>
                                <a href="" className="btn btn-outline-success btn-sm">Check events</a>
                                <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card" style={{minHeight: "60vh"}}>
                            <Image src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="Image-fluid card-img-top"  style={{height:"85%"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Sport</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                <a href="" className="btn btn-outline-success btn-sm">Check events</a>
                                <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}