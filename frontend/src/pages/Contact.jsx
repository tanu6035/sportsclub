import {Link} from "react-router-dom";
//import PublicNavbar from "../components/PublicNavbar.jsx";

function Contact(){
    return(
        <>

            <div className="banner banner1">
                <div className="inner-page-banner banner-bg">
                    <div className="container">
                        <div className="banner-content">
                            <div className="page-path">
                                <ul>
                                    <li><Link className="home-page-link" to="/">Home</Link></li>
                                </ul>
                            </div>
                            <h1 className="banner-heading">CONTACT US</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact area content*/}

            <div className="contact-area">
                <div className="container">
                    <div className="address-box">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="address">
                                    <div className="icon"><i className="far fa-map-marker-alt"></i></div>
                                    <div className="content">
                                        <h3 className="heading">
                                            LOCATION
                                        </h3>
                                        <p className="desc">Dev Technical College, Modal Town
                                            Amritsar</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="address">
                                    <div className="icon"><i className="far fa-envelope-open"></i></div>
                                    <div className="content">
                                        <h3 className="heading">
                                            MAIL US 24/7
                                        </h3>
                                        <p className="desc">championsclub@gmail.com
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="address">
                                    <div className="icon"><i className="far fa-phone-volume"></i></div>
                                    <div className="content">
                                        <h3 className="heading">
                                            PHONE
                                        </h3>
                                        <p className="desc">098 777 888 90</p>
                                        <p className="desc">9812345678 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-area-inner">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-md-12">
                                <div className="map">
                                    <p>
                                       <img src="/assets/images/team/financial.jpg" alt="contact"/>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <form className="contact-form mb-10">
                                    <h3 className="post-title mb-35 ">SEND YOUR QUERY TO OUR COACHES </h3>
                                    <div className="info-form">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="input-box name mb-20">
                                                    <input type="text" id="validationDefault01" placeholder="Your Name"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="input-box email mail-input mb-20">
                                                    <input type="email" id="validationDefault02"
                                                           placeholder="Your E-mail"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="input-box message text-input mb-20">
                                            <textarea name="Message" id="validationDefault05" cols="30" rows="10"
                                                      placeholder="Write Your Message" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-15 ">
                                                <button type="submit" className="form-btn form-btn4">
                                                    SEND
                                                </button>

                                                <br/><br/><br/>

                                                <div className="col-lg-12 col-sm-12 pt-3">
                                                <div className="row " style={{backgroundColor: 'lightyellow'}}>
                                                    <div className="col-sm-2">
                                                        <h4 style={{color: 'firebrick'}}>CONTACT TRAINERS <br/>
                                                        </h4>
                                                    </div>
                                                    <div className=" offset-2 col-sm-8">
                                                        <h4 style={{color: 'dimgrey'}}> Harpreet Singh 5678900987<br/>FatehSingh
                                                            5678900987
                                                        </h4>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;