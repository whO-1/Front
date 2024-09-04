"use client"


export default function AccordionGallerySkeleton(){
    
    
    const handleToggleContent = (e) => {
        console.log(e.target.parentNode)
        e.target.parentNode.classList.toggle('faq-active');
    }

    return(
        <>
            <div className="faq-item " data-aos="fade-up" data-aos-delay="200">
                <i className="faq-icon bi bi-question-circle"></i>
                <h3 onClick={ handleToggleContent } className="text-secondary" > Loading... </h3>
                <div className="faq-content">
                    <p></p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" onClick={handleToggleContent}></i>
            </div>

            <div className="faq-item " data-aos="fade-up" data-aos-delay="200">
                <i className="faq-icon bi bi-question-circle"></i>
                <h3 onClick={ handleToggleContent } className="text-secondary" > Loading... </h3>
                <div className="faq-content">
                    <p></p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" onClick={handleToggleContent}></i>
            </div>
            
            <div className="faq-item " data-aos="fade-up" data-aos-delay="200">
                <i className="faq-icon bi bi-question-circle"></i>
                <h3 onClick={ handleToggleContent } className="text-secondary" > Loading... </h3>
                <div className="faq-content">
                    <p></p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" onClick={handleToggleContent}></i>
            </div>
        </>
        

    );
}