"use client"
import { Image } from "react-bootstrap";
import CardBase from "@/components/cards/template/CardBase";

class CategoryCard extends CardBase {
    constructor (props) {
        super(props);
    }

    fetchAndConvertImage = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (response.ok) {
                this.setState({ Img_Url:`data:image/jpeg;base64,${data.ImageData}`  });
            } else {
                console.error('Fetched data is not a valid base64 image');
                
            }
        } catch (error) {
          console.error('Error fetching or converting image:', error);
        }
    };
    
      componentDidMount() {
        const { Img_Url } = this.state;
        if (!Img_Url.startsWith('/assets')) {
            this.fetchAndConvertImage(Img_Url);
        } 
      }

    render( ) {
        const { Img_Url, Title, Description, Id } = this.state;

        return (
            <div className="col-lg-4 col-md-6 mt-4 "  data-aos-delay="100" >
                <div className="card">
                <div className="card-img">
                    <Image src={Img_Url} alt="category-image" className="img-fluid"/>
                    {/* <Image src="/assets/img/quote-bg.jpg" alt="category-image" className="img-fluid"/> */}
                </div>
                <h3><a href={`/events/${Id}`} className="stretched-link">{Title}</a></h3>
                <p>{ (Description.length > 30 )? Description.slice(0,70) + " ..." : Description }</p>
                </div>
            </div>
        );
    }
}

export default CategoryCard;
