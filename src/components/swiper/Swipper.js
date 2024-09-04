"use client"
import { useEffect } from "react";
import { Image } from "react-bootstrap";

export default function Swiper () {
    
    return(
        <>
            <section id="testimonials" className="testimonials section dark-background">
                <Image src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt=""/>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper init-swiper">

                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                <Image src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                <Image src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                <Image src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                <Image src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                <Image src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        
        </>
    );
}