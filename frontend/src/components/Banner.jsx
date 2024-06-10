const Banner = ({pageTitle}) => {
    return (
        <div className="banner banner1">
            <div className="inner-page-banner banner-bg">
                <div className="container">
                    <div className="banner-content">
                        <div className="page-path">
                            <ul>
                                {/*<li><a className="home-page-link" href="index.html">Home</a></li>*/}
                                {/*<li>*/}
                                {/*    <a className="current-page" href="#">*/}
                                {/*        {pageTitle}*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <h1 className="banner-heading">{pageTitle}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner