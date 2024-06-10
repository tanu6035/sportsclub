import {Link} from "react-router-dom";

function PublicNavbar(){
    return(
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
                                            <li><Link className=" menu-item active1" to="/">Home</Link></li>
                                            <li><Link className="menu-item" to="/about">About</Link></li>

                                            <li className="has-dropdown"><Link className="menu-item" to="#">CLUB MEDIA</Link>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/gallery">Gallery</Link>
                                                    </li>
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/player-prof">Player
                                                        Profiles</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="has-dropdown"><Link className="menu-item" to="#">ORGANIZER
                                            </Link>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/orglogin">Login</Link>
                                                    </li>
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/signup">Signup</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><Link className="menu-item" to="#">DEPARTMENT
                                            </Link>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/dept-login">Login</Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><Link className="menu-item" to="#">STUDENT
                                            </Link>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/stu-login">Login</Link>
                                                    </li>
                                                    <li className="dropdown-li"><Link className="dropdown-link"
                                                                                      to="/stu-signup">Signup</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link className="menu-item" to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-action-items header-action-items1 ">
                                    <h1 className=" gallery-title" style={{color: 'white'}}>SPORTS CLUB</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Banner Slider in home */}


            </header>


        </>
    )
}

export default PublicNavbar;