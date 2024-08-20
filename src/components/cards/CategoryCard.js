"use client"
import { Image } from "react-bootstrap";
import CardBase from "@/components/cards/template/CardBase";

class CategoryCard extends CardBase {
    constructor (props) {
        super(props);
    }

    render( ) {
        return (
            <div className="col-lg-4 col-md-6 mt-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card">
                <div className="card-img">
                    <Image src={this.props.Img_Url} alt="category-image" className="img-fluid"/>
                </div>
                <h3><a href="#" className="stretched-link">{this.props.Title}</a></h3>
                <p>{this.props.Description}</p>
                </div>
            </div>
        );
    }
}

export default CategoryCard;
