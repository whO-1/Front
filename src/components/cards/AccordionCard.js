"use client"
import CardBase from "@/components/cards/template/CardBase";
class AccordionCard extends CardBase {
    constructor (props) {
        super(props);
    }
    
    handleToggleContent(e){
        e.target.parentNode.classList.toggle('faq-active');
    }

    render( ) {
        return (
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                <i className="faq-icon bi bi-question-circle"></i>
                <h3 onClick={ this.handleToggleContent } >{this.props.Title}</h3>
                <div className="faq-content">
                    <p>{this.props.Description}</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"  onClick={this.handleToggleContent}></i>
            </div>
        );
    }
}

export default AccordionCard;
