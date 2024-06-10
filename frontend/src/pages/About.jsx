import {Link} from "react-router-dom";

function About() {
    return (
        <>

            {/*Banner*/}
            <div className="banner banner1">
                <div className="inner-page-banner banner-bg">
                    <div className="container">
                        <div className="banner-content">
                            <div className="page-path">
                                <ul>
                                    <li><a className="home-page-link" href="index.html">Home</a></li>
                                    <li><a className="current-page" href="about.html">About Us</a></li>
                                </ul>
                            </div>
                            <h1 className="banner-heading">ABOUT US</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*About Section*/}
            <div className="rts-about-section  about section-gap">
                <div className="container">
                    <div className="about-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-12">
                                <div className="about-thumb">
                                    <div className="img1"><img src="assets/images/about/voly_11.png" alt="about-thumb"/>
                                    </div>
                                    <div className="img2"><img src="assets/images/about/voly_33.png" alt="about-thumb"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="contents">
                                    <div className="section-title-area section-title-area1 text-start">
                                        <h1 className="section-title"><span>ABOUT THE</span> <br/> CHAMPIONS CLUB </h1>
                                        <p> [DEV TECHNICAL COLLEGE, AMRITSAR]<br/>
                                            Our journey began with a simple yet profound belief – that sports have the power to transform lives.
                                            Guided by this ethos, we have cultivated a community where individuals of different backgrounds come together
                                            to pursue their athletic dreams. <br/>
                                            We pride ourselves on offering a diverse range of games like Volleyball, Badminton, Kabaddi and others.
                                            Warriors Sports Club is more than just a place to play, it is a hub of inspiration and growth. Our experienced
                                            coaches and staff are dedicated to nurturing talent, instilling values of sportsmanship, discipline, and resilience
                                            that extend far beyond the game.<br/>
                                            Along with competitions, Sports Club do fosters a tight-knit community where friendships are forged,
                                            and memories are made. <br/>
                                            </p>
                                    </div>
                                    <ul>
                                        <li className="player">
                                            <h3 className="title pb-1">well-furnished</h3>
                                            <p className="sub">TRACK & COURTS</p>
                                        </li>
                                        <li className="player">
                                            <h3 className="title pb-1">good quality</h3>
                                            <p className="sub">GAME EQUIPMENTS</p>
                                        </li>
                                        <li className="player">
                                            <h3 className="title">well-trained</h3>
                                            <p className="sub">COACHES</p>
                                        </li>
                                    </ul>
                                    <Link to="/player-prof" className="more-btn">OUR PLAYERS <i
                                        className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;