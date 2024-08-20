import { Image } from "react-bootstrap";

export default function CustomFooter() {
    return(
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                            <Image src="/images/svg/logo-white.svg" alt="logo"></Image>
                        </a>
                        <p>An event planner app designed for planning and scheduling your time, ensuring you are aware of every event that takes place.</p>
                        <div className="social-links d-flex mt-4">
                            <a href=""><i className="bi bi-twitter-x"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>Bd. Stefan cel Mare</p>
                        <p>Centru, Chișinău </p>
                        <p>Republica Moldova</p>
                        <p className="mt-4"><strong>Phone:</strong> <span>+373  123 445</span></p>
                        <p><strong>Email:</strong> <span>eventplanner@gmail.com</span></p>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>Created by <strong className="px-1 sitename">Dumitru Diocher</strong> </p>
                <div className="credits" >
                    with <a href="https://stefanini.com/"><Image src="https://stefanini.com/en/wp-content/uploads/sites/2/2022/06/Logo_StefaniniGroup_2020_White-1.png" style={{width: "80px", height:"20px"}} alt="logo"/></a> support
                </div>
                <div className="credits" style={{fontSize: "5px"}}>
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>

        </footer>
    );
}

