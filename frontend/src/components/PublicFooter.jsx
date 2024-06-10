import {Link} from "react-router-dom";

function PublicFooter(){
    return(
        <>
            <div className="footer footer1">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widget">
                                    <div className=" footer-widget-title">SPORTS CLUB
                                    </div>
                                    <p className="footer-text">
                                        Join the vibrant pulse of Champions sports club! Embrace the spirit of teamwork,
                                        competition, and camaraderie as you dive into a world of athletic excellence.</p>
                                    <div className="social-links">
                                        <Link to="#0" className="platform"><i
                                            className="fab fa-facebook-f"></i></Link>
                                        <Link to="#0" className="platform"><i
                                            className="fab fa-twitter"></i></Link>
                                        <Link to="#0" className="platform"><i
                                            className="fab fa-behance"></i></Link>
                                        <Link to="#0" className="platform"><i
                                            className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title"><span className="decorator"></span> ESSENTIAL
                                        LINKS</h3>
                                    <ul className="widget-items cata-widget">
                                        <li className="widget-list-item"><Link to="/about">ABOUT CLUB</Link></li>
                                        <li className="widget-list-item"><Link to="/contact">CONTACTS</Link></li>
                                        <li className="widget-list-item"><Link to="/player-prof">OUR PLAYERS</Link></li>
                                        <li className="widget-list-item"><Link to="#0">TEAM DETAILS</Link></li>
                                        <li className="widget-list-item"><Link to="/about">OUR HISTORY</Link></li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widget address-widget">
                                    <h3 className="footer-widget-title"><span className="decorator"></span> GET IN TOUCH
                                    </h3>
                                    <ul>
                                        <li className="widget-list-item"><i className="fas fa-envelope-open"></i><Link
                                            to="mailto:warriorsclub@gmail.com">CHAMPIONSCLUB@GMAIL.COM</Link></li>
                                        <li className="widget-list-item"><i className="fas fa-phone"></i><Link
                                            to="tel:09877788890">098 777 888 90</Link></li>
                                        <li className="widget-list-item"><i className="fas fa-map-marker-alt"></i>
                                            <span> Dev Technical College
                                         <br/>
                                        AMRITSAR,PUNJAB</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widget news-widget">
                                    <h3 className="footer-widget-title"><span className="decorator"></span> POST GALLERY
                                    </h3>
                                    <div className="recent-post">
                                        <div className="picture">
                                            <Link to="/gallery">
                                                <img src="/assets/images/footer/news5.png" alt="side-post-image"/>
                                            </Link>
                                        </div>
                                        <div className="picture">
                                            <Link to="/gallery">
                                                <img src="/assets/images/footer/a_8.png" alt="side-post-image"/>
                                            </Link>
                                        </div>
                                        <div className="picture">
                                            <Link to="/gallery">
                                                <img src="/assets/images/footer/news3.png" alt="side-post-image"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="recent-post post2">
                                        <div className="picture">
                                            <Link to="/gallery">
                                                <img src="/assets/images/footer/ac.jpg" alt="side-post-image"/>
                                            </Link>
                                        </div>
                                        <div className="picture">
                                            <Link to="/gallery">
                                                <img src="/assets/images/footer/news4.png" alt="side-post-image"/>
                                            </Link>
                                        </div>
                                        <div className="picture">
                                            <Link to="/gallery">
                                                <img src="/assets/images/footer/news6.png" alt="side-post-image"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="bottom-area-inner">
                            <span className="copyright">COPYRIGHT & DESIGN BY <span className="brand">CHAMPIONS CLUB</span> - 2024</span>
                            <div className="footer-bottom-links">
                                <Link to="#">SPORTS</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicFooter;