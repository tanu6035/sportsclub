import {Link} from "react-router-dom"

function AdminNavbar() {
    function logout(){
        localStorage.removeItem('adminToken');
        window.location.href = '/admin-login';
    }
    return (
        <>
            <header id="rtsHeader" className="rts-header1">
                <div className="navbar-sticky">
                    <div className="navbar-part navbar-part1">
                        <div className="container">
                            <div className="navbar-inner">
                                <Link to="/" className="logo"><img src="/assets/images/logo_hh.png"
                                                                   alt="sportius-logo"/></Link>
                                <Link to="/" className="logo-sticky"><img src="/assets/images/logo_hh.png"
                                                                          alt="kester-logo"/></Link>
                                <div className="rts-menu">
                                    <nav className="menus menu-toggle">
                                        <ul className="nav__menu">
                                            <li><Link className=" menu-item active1"
                                                      to="/admin/admin-dashboard">DASHBOARD</Link></li>
                                            <li><Link className="menu-item" to="/admin/change-password">CHANGE
                                                PASSWORD</Link></li>

                                            <li className="has-dropdown"><Link className="menu-item" to="#">PAGES</Link>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/admin/games">Games</Link>
                                                    </li>
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/admin/event">Events</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="has-dropdown"><Link className="menu-item"
                                                                               to="#">SCHEDULES</Link>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/admin/sch-list1">Schedule
                                                        Pending</Link>
                                                    </li>
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/admin/sch-list2">Schedule
                                                        Approved</Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li><Link className="menu-item" to="/admin/dept">DEPARTMENTS</Link></li>
                                            <li><Link className="menu-item" to="/admin/register-stu">STUDENTS </Link>
                                            </li>
                                        </ul>
                                        <li>
                                            <Link className="menu-item">
                                                <button className="hov" style={{color:'white',fontSize:14,letterSpacing:1,fontWeight:500}} onClick={logout}>LOGOUT</button>
                                            </Link>
                                        </li>
                                    </nav>
                                </div>
                                {/*<div className="header-action-items header-action-items1">
                                    <div className="search-part">
                                        <div className="search-icon action-item icon"><i className="rt-search"></i>
                                        </div>
                                        <div className="search-input-area">
                                            <div className="container">
                                                <div className="search-input-inner">
                                                    <select className="custom-select select-hidden">
                                                        <option value="hide">All Catagorys</option>
                                                        <option value="all">All</option>
                                                        <option value="league">League</option>
                                                        <option value="club">Club</option>
                                                        <option value="team">Team</option>
                                                        <option value="player">Player</option>
                                                        <option value="match">Match</option>
                                                        <option value="score">Score</option>
                                                    </select>
                                                    <div className="input-div">
                                                        <div className="search-input-icon"><i
                                                            className="rt-search mr--10"></i></div>
                                                        <input id="searchInput1" className="search-input" type="text"
                                                               placeholder="Search by keyword or #"/>
                                                    </div>
                                                    <div className="search-close-icon"><i className="rt-xmark"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}

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
                            <Link to="/">
                                <img src="/assets/images/logo_hh.png" alt="logo"/>
                            </Link>
                        </div>
                    </div>

                    <nav className="side-mobile-menu side-mobile-menu1">
                        <ul id="mobile-menu-active">
                            <li className="has-dropdown firstlvl">
                                <Link className="mm-link" to="/">Home <i className="rt-angle-down"></i></Link>
                            </li>
                            <li><Link className="mm-link" to="/">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="side-bar-social-links">
                        <Link to="#0" className="platform"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#0" className="platform"><i className="fab fa-twitter"></i></Link>
                        <Link to="#0" className="platform"><i className="fab fa-behance"></i></Link>
                        <Link to="#0" className="platform"><i className="fab fa-youtube"></i></Link>
                    </div>
                </aside>

                {/* Banner Slider in home */}


            </header>
        </>
    )
}

<br/>
{/*<Link to="/admin/admin-dashboard">Dashboard</Link> || <Link to="/admin/change-password">
    Change Password</Link> || <Link to="/admin/games">Games & Events</Link> || <Link to="/admin/sch-list1">
    Schedule Pending</Link> || <Link to="/admin/sch-list2">Schedule Approved</Link> || <Link to="/admin/dept">
    Department</Link> || <Link to="/admin/register-stu">Students Registerd</Link> || <button>Logout</button>
<br/>
<br/>*/
}
export default AdminNavbar;