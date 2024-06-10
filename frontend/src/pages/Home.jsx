import {useEffect, useState} from "react";
import Result from "./Result.jsx";
import {Link} from "react-router-dom";

function Home(){

        //deptcontroller
        const [task, setTask] = useState([]);

        async function fetchSchedule() {

            const url = "http://localhost:5000/home_sch";
            let response = await fetch(url);
            response = await response.json();
            console.log(response);
            if (response.error != "") {
                alert(response.error)
            } else {
                setTask(response.records)
            }

        }

        useEffect(() => {
            fetchSchedule()
        }, [])



    return(
        <>

            {/* SLIDER banner ( was within <Header> PublicNavbar) */}
            <div className="banner banner1">
                <div className="swiper bannerSlide">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="banner-single banner-single-1 banner-bg">
                                <div className="container">
                                    <div className="banner-content">
                                        <span className="pretitle">WELCOME TO OUR CHAMPION CHASERS CLUB, DEV TECHNICAL COLLEGE AMRITSAR</span>
                                        <h1 className="banner-heading">EMBRACE THE ART <br/>
                                            OF SPORT</h1>
                                        <div className="banner-btn-area">

                                            <p className="nxt-match-btn banner-btn">NEXT MATCHES <i
                                                className="far fa-long-arrow-right ml--5"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="banner-single banner-single-1_2 banner-bg">
                                <div className="container">
                                    <div className="banner-content">
                                        <span className="pretitle">WELCOME TO OUR CHAMPION CHASERS CLUB</span>
                                        <h1 className="banner-heading">ANDERSON & THE <br/>
                                            WORLD CUP WINNER</h1>
                                        <div className="banner-btn-area">
                                            <p className="nxt-match-btn banner-btn">NEXT MATCHES <i
                                                className="far fa-long-arrow-right ml--5"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="banner-single banner-single-3 banner-bg">
                                <div className="container">
                                    <div className="banner-content">
                                        <span className="pretitle">WELCOME TO OUR CHAMPION CHASERS CLUB</span>
                                        <h1 className="banner-heading">HENDERSON & THE <br/>
                                            WORLD CUP WINNER</h1>
                                        <div className="banner-btn-area">
                                            <p className="nxt-match-btn banner-btn">NEXT MATCHES <i
                                                className="far fa-long-arrow-right ml--5"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-pagination-area">
                        <div className="swiper-paginations">
                            <span className="swiper-pagination-bullet one"></span>
                            <span className="swiper-pagination-bullet two"></span>
                            <span className="swiper-pagination-bullet three"></span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rts-next-match-section section-gap">
                <div className="container">
                    <div className="section-title-area section-title-area1 text-center mb--15">
                        <span className="pretitle">GAMES</span>
                        <h1 className="section-title">SCHEDULES</h1>
                        <p> CLUB SCHEDULES THAT ARE ONGOING AND UPCOMING</p>
                    </div>
                    <ul className="table-area table-full" >

                            {task.length == 0 ? <li><p className="mode">No Match schedule yet</p></li> : task.map((value, index) =>
                                <li className="table-inner"  key={index}>
                                    <div className="team-name">
                                        <p className="mode" style={{color:'rebeccapurple'}}>SCHEDULE</p>
                                        <h3 className="name" >{value.scheduleDate}</h3>
                                        <p className="time"></p>
                                    </div>
                                    <div className="button-area">
                                        <h2 className="name " style={{color: 'darkslateblue'}}>{value.game}</h2>
                                    </div>
                                    <div className="button-area">{/*darkslategrey*/}
                                        <h2 className="name" style={{color: 'black'}}> {value.event_name}</h2>
                                    </div>
                                </li>
                            )}

                    </ul>
                </div>
            </div>

            {/*notice*/}
            <div className="container pb--100 ">
                <div className="contact-area-inner" style={{backgroundColor:'black',color:'white'}}>
                    <div className="row align-items-start p-5 row" >
                        <div className="  col-md-12 col-lg-6" style={{backgroundColor:'darkkhaki'}}>
                            <span className="p-5">
                                <ul>
                                <center><h2>NOTICES</h2></center><hr/>
                                    <li>No notice yet</li>
                            </ul>
                            </span>
                        </div>
                        <div className=" col-md-12 col-lg-6 ">
                            <img src="/assets/images/sport.jpg" alt="sports"/>

                        </div>
                    </div>
                </div>
            </div>
            {/*  RESULT */}
            <Result/>
            {/*  GALLERY */}
            <div className="container pb-sm-4 pb--100 pt-0">
                <h2  style={{fontSize:42,marginLeft:15}}>HIGHLIGHTS</h2>
            </div>
            <div className="rts-gallery-section pt-2 ">
                <div className="container">

                    <div className="gallery-area">
                        <div className="gallery-item text-center">
                            <Link to="#0" className="gallery-picture"><img src="/assets/images/gallery/img8.jpg"
                                                                           alt=""/></Link>
                            <Link to="#0" className="gallery-picture1"><img src="/assets/images/gallery/img8-small.jpg"
                                                                            alt=""/></Link>
                            <div className="contents-wrapper">
                                <div className="contents text-start">
                                    <div className="d-block">
                                        <p className="tag">FOOTBALL</p>
                                        <p className="gallery-title">KEEP YOUR EYE ON THE BALL
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <div className="content">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item text-center active mid">
                            <Link to="#0" className="gallery-picture"><img src="/assets/images/gallery/abcabc.png"
                                                                           alt=""/></Link>
                            <Link to="#0" className="gallery-picture1"><img src="/assets/images/gallery/abcabc.png"
                                                                            alt=""/></Link>
                            <div className="contents-wrapper">
                                <div className="contents text-start">
                                    <div className="d-block">
                                        <p className="tag">AWARDS</p>
                                        <p className="gallery-title">CLUB ACHIEVEMENTS
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <div className="content">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item text-center">
                            <Link to="#0" className="gallery-picture"><img src="/assets/images/gallery/img10.jpg"
                                                                           alt=""/></Link>
                            <Link to="#0" className="gallery-picture1"><img src="/assets/images/gallery/img10-small.jpg"
                                                                            alt=""/></Link>
                            <div className="contents-wrapper">
                                <div className="contents text-start">
                                    <div className="d-block">
                                        <p className="tag">FOOTBALL</p>
                                        <p className="gallery-title">A GAME OF TWO HALVES
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <div className="content">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* SCROLL*/}
            <div className="scroll-top-btn scroll-top-btn1"><i className="fas fa-angle-up arrow-up"></i><i
                className="fas fa-circle-notch"></i></div>
        </>
    )
}

export default Home;