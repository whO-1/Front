"use client"


import "./accordion.css"

export default function AccordionCardSkeleton () {
    const handleToggleContent = (e) => {
        e.target.parentNode.classList.toggle('faq-active');
    }
    return(
        <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
            <i className="faq-icon bi bi-question-circle"></i>
            <h3 onClick={ handleToggleContent } > Loading...</h3>
            <div className="faq-content">
                <p></p>
            </div>
            <i className="faq-toggle bi bi-chevron-right"  onClick={handleToggleContent}></i>
        </div>
    );
}