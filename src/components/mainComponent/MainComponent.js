"use client"

import {Image } from "react-bootstrap";
import LoadComponentExtension from "@/extensions/LoadComponentExtension";
import CardsGallery from "@/components/gallery/CardsGallery";
import CardsGallerySkeleton from "@/components/gallery/CardsGallerySkeleton";
import CategoryCard from "@/components/cards/CategoryCard";
import AccordionCard from "@/components/cards/AccordionCard";
import AccordionGallerySkeleton from "@/components/gallery/AccordionGallerySkeleton";
import CustomForm from "../forms/CustomForm";
import { useEffect } from "react";

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;
import AOS from 'aos';


export default function MainComponent(){

    function typeTextAndAnimateLastWord(elementId, text, lastWords, typingSpeed = 100, wordChangeSpeed = 1000) {
        const element = document.getElementById(elementId);
        let index = 0;
        let lastWordIndex = 0;
        let currentWord = '';
        let typingLastWord = true;
        let wordCharIndex = 0;
        
        function typeNextChar() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeNextChar, typingSpeed);
            } else {
                typeOrEraseLastWord();
            }
        }

        function typeOrEraseLastWord() {
            const textWithoutLastWord = text.substring(0, text.lastIndexOf(" ") + 1);
            if (typingLastWord) {
                if (wordCharIndex < lastWords[lastWordIndex].length) {
                    currentWord += lastWords[lastWordIndex].charAt(wordCharIndex);
                    wordCharIndex++;
                    element.innerHTML = textWithoutLastWord + `<span class="text-success" style="font-size: larger; font-weight: bold;">${currentWord}</span>`;
                    setTimeout(typeOrEraseLastWord, typingSpeed);
                } else {
                    setTimeout(() => {
                        typingLastWord = false;
                        typeOrEraseLastWord();
                    }, wordChangeSpeed);
                }
            } else {
                if (wordCharIndex > 0) {
                    wordCharIndex--;
                    currentWord = currentWord.slice(0, wordCharIndex);
                    element.innerHTML = textWithoutLastWord + `<span class="text-success" style="font-size: larger; font-weight: bold;">${currentWord}</span>`;
                    setTimeout(typeOrEraseLastWord, typingSpeed);
                } else {
                    lastWordIndex = (lastWordIndex + 1) % lastWords.length;
                    typingLastWord = true;
                    typeOrEraseLastWord();
                }
            }
        }
        element.innerHTML = '';
        typeNextChar();
    }

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        typeTextAndAnimateLastWord(
          'animatedText', 
          `This is a universal community for everyone around the world. Use our application to find your favourite  :`, 
          ['Event . . .','Location . . .', 'Friends . . .', 'Feelings . . .', 'Vibe . . .'], 
          50, 1400
      );
    }, []);

    return(
        <main className="main">
            <section id="hero" className="hero section bg-primary" >
        
              <Image src="./assets/img/world-dotted-map.png" alt="" className="hero-bg" data-aos="fade-in"/>
        
              <div className="container">
                <div className="row gy-4 d-flex justify-content-between">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h2 data-aos="fade-up " className="text-light">Make some plans with EventPlanner.</h2>
                    <p id="animatedText" data-aos="fade-up" data-aos-delay="100" className="text-light" style={{letterSpacing: "0.05rem"}} >This is a universal community for everyone. Apply the filters and <b className="text-success">find Your favourite activity!</b> If you are interested in a particular event take a search:</p>
        
                    <CustomForm/>
        
                    <div className="row gy-4 text-secondary"  data-aos="fade-up" data-aos-delay="300">
                      <div className="col-lg-3 col-6 ">
                        <div className="stats-item text-center w-100 h-100 ">
                          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" className="purecounter ">232</span>
                          <p>Events</p>
                        </div>
                      </div>
        
                      <div className="col-lg-3 col-6">
                        <div className="stats-item text-center w-100 h-100">
                          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" className="purecounter ">15</span>
                          <p>Categories</p>
                        </div>
                      </div>
        
                      <div className="col-lg-3 col-6">
                        <div className="stats-item text-center w-100 h-100">
                          <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" className="purecounter ">1453</span>
                          <p>People</p>
                        </div>
                      </div>
        
                      <div className="col-lg-3 col-6">
                        <div className="stats-item text-center w-100 h-100">
                          <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" className="purecounter ">5</span>
                          <p>Support Operators</p>
                        </div>
                      </div>
        
                    </div>
        
                  </div>
        
                  <div className="col-lg-5 order-1 order-lg-2 hero-Image d-none d-md-block" data-aos="zoom-out">
                      <Image src="assets/img/hero-img.svg" className="Image-fluid mb-3 mb-lg-0" alt=""/>
                  </div>
        
                </div>
              </div>
        
            </section>
    
            
        {/* <section id="featured-services" className="featured-services section">
    
          <div className="container">
    
            <div className="row gy-4">
    
              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"></i></div>
                <div>
                  <h4 className="title">Lorem Ipsum</h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              
    
              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
                <div>
                  <h4 className="title">Dolor Sitema</h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
                <div>
                  <h4 className="title">Sed ut perspiciatis</h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
    
            </div>
    
          </div>
    
        </section> */}
    
        
        {/* <section id="about" className="about section">
    
          <div className="container">
    
            <div className="row gy-4">
    
              <div className="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
                <Image src="assets/img/about.jpg" className="Image-fluid" alt=""/>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox pulsating-play-btn"></a>
              </div>
    
              <div className="col-lg-6 content order-last  order-lg-first" data-aos="fade-up" data-aos-delay="100">
                <h3>About Us</h3>
                <p>
                  Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                      <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                      <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Voluptatem et qui exercitationem</h5>
                      <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                    </div>
                  </li>
                </ul>
              </div>
    
            </div>
    
          </div>
    
        </section>
     */}
        
        <section id="services" className="services section bg-light">
            <div className="section-title " data-aos="fade-up">
                <span>Top Events</span>
                <h2>Top Events</h2>
                <p>Find out best events, activities and entertaiment meetings that fit best for you.</p>
            </div>
            <div className="bg-light m-0 p-0">
                <LoadComponentExtension
                    Component={CardsGallery}
                    ComponentProps={{
                        Child: CategoryCard, 
                        Name: "TopPosts"
                    }}
                    ComponentSkeleton={CardsGallerySkeleton}
                    Endpoint={"/api/events"}
                    fetchProps = {{
                        cache: 'no-store',
                        method:"POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache',
                        },
                        body: JSON.stringify({
                          PaginationOptions:{
                              PageSize: 3,
                              CurrentPage: 1,
                          }
                        }),
                    }}
                />
            </div>
        </section>
        
        <section id="call-to-action" className="call-to-action section dark-background">
            <Image src="assets/img/cta-bg.jpg" alt=""/>
            <div className="container">
                <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                    <div className="col-xl-8">
                        <div className="text-center">
                            <h3>Events Manager</h3>
                            <p>Are you an organizator of events or some public group activities. Register on our platform and promote your planned even right now. Find out your audience</p>
                            <a className="cta-btn" href={adminUrl}>Register now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
        
      
        {/* <section id="features" className="features section">
    
          
          <div className="container section-title" data-aos="fade-up">
            <span>Features</span>
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
    
          <div className="container">
    
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <Image src="assets/img/features-1.jpg" className="Image-fluid" alt=""/>
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check"></i> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
                </ul>
              </div>
            </div>
    
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <Image src="assets/img/features-2.jpg" className="Image-fluid" alt=""/>
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
                <h3>Corporis temporibus maiores provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
    
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                <Image src="assets/img/features-3.jpg" className="Image-fluid" alt=""/>
              </div>
              <div className="col-md-7" data-aos="fade-up">
                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                <ul>
                  <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
                </ul>
              </div>
            </div>
    
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
                <Image src="assets/img/features-4.jpg" className="Image-fluid" alt=""/>
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
    
          </div>
    
        </section> */}
    
        
        {/* <section id="pricing" className="pricing section">
    
          
          <div className="container section-title" data-aos="fade-up">
            <span>Pricing</span>
            <h2>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
    
          <div className="container">
    
            <div className="row gy-4">
    
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="pricing-item">
                  <h3>Free Plan</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                    <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#" className="buy-btn">Buy Now</a>
                </div>
              </div>
    
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="pricing-item featured">
                  <h3>Business Plan</h3>
                  <h4><sup>$</sup>29<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                    <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#" className="buy-btn">Buy Now</a>
                </div>
              </div>
    
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="pricing-item">
                  <h3>Developer Plan</h3>
                  <h4><sup>$</sup>49<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                    <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#" className="buy-btn">Buy Now</a>
                </div>
              </div>
    
            </div>
    
          </div>
    
        </section>
     */}
        
        
    
        
        <section id="faq" className="faq section">
    
          
          <div className="container section-title" data-aos="fade-up">
            <span>Frequently Asked Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
    
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="faq-container">

                    <LoadComponentExtension
                        Component={CardsGallery}
                        ComponentProps={{
                            Child: AccordionCard,
                            Name: "Faqs"
                        }}
                        ComponentSkeleton={AccordionGallerySkeleton}
                        Endpoint={"/api/faqs"}
                    />

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
       
    );
}

