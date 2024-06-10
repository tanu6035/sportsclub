import {Link} from "react-router-dom";

function OrgNavbar(){
    function logout(){
        localStorage.removeItem('orgToken');
        window.location.href = '/orglogin';
    }

    return(
        <>
            <header id="rtsHeader" className="rts-header1">
                <div className="navbar-sticky">
                    <div className="navbar-part navbar-part1">
                        <div className="container">
                            <div className="navbar-inner">
                                <Link to="/student/stu-dashboard" className="logo"><img src="/assets/images/logo_hh.png"
                                                                                        alt="sportius-logo"/></Link>
                                <Link to="/student/stu-dashboard" className="logo-sticky"><img
                                    src="/assets/images/logo_hh.png"
                                    alt="kester-logo"/></Link>
                                <div className="rts-menu">
                                    <nav className="menus menu-toggle">
                                        <ul className="nav__menu">
                                            <li><Link className="menu-item" to="/org/dash-sch">Dashboard</Link></li>
                                            <li><Link className="menu-item" to="/org/schedule">Schedule</Link></li>
                                            <li><Link className="menu-item" to="/org/match">Matches</Link>
                                            </li>
                                            <li>
                                                <Link className="menu-item">
                                                    <button className="hov" style={{color:'white',fontSize:14,letterSpacing:1,fontWeight:500}} onClick={logout}>LOGOUT</button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                {/*<div className="header-action-items header-action-items1"></div>*/}

                                <Link className="hamburger-menu aitem d-block">
                                    <div className="hamburger-menu-inner">
                                        <span></span>
                                        <span className=""></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="slide-bar">
                    <div className="offset-sidebar">
                        <button className="slide-bar-close ml--30"><i className="fal fa-times"></i></button>
                        <div className="offset-widget offset-logo mb-30">
                            <img src="/assets/images/logo.png" alt="logo"/>
                        </div>
                    </div>

                    <nav className="side-mobile-menu side-mobile-menu1">
                        <ul id="mobile-menu-active">
                            <li><Link className="mm-link" to="contact.html">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="side-bar-social-links">
                        <Link to="#0" className="platform"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#0" className="platform"><i className="fab fa-twitter"></i></Link>
                        <Link to="#0" className="platform"><i className="fab fa-behance"></i></Link>
                        <Link to="#0" className="platform"><i className="fab fa-youtube"></i></Link>
                    </div>
                </aside>
            </header>
            {/*<h2>Navbar</h2>
            <Link to="">Dashboard(no path)</Link> || <Link to="/org/schedule">Schedule</Link> || <Linkto="/org/events">Events</Link>
            <hr/>*/}
        </>
    )
}

export default OrgNavbar;