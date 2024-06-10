import Banner from "../components/Banner.jsx";

function Gallery(){
    return(
        <>
            <Banner pageTitle="Gallery"/>

            <div className="rts-gallery-section">
                <div className="container">
                    <div className="top-wrap">
                        <div className="filter-button-group">
                            <button className="filter-btn active" data-show=".fifa20">Tournament Ball</button>
                            <button className="filter-btn" data-show=".uefacup">Kabaddi Cup</button>
                            <button className="filter-btn" data-show=".warmup">Kho-Kho Game</button>
                            <button className="filter-btn" data-show=".national">Off Campus Tournament</button>
                        </div>
                    </div>
                    <div className="filterd-items fifa20">
                        <div className="gallery-grid">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full1.png" title="Football.png"><img
                                            src="assets/images/gallery/1.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full2.png" title="Football.png"><img
                                            src="assets/images/gallery/2.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full3.png" title="Football.png"><img
                                            src="assets/images/gallery/3.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full4.png" title="Football.png"><img
                                            src="assets/images/gallery/4.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full5.png" title="Football.png"><img
                                            src="assets/images/gallery/5.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full6.png" title="Football.png"><img
                                            src="assets/images/gallery/6.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filterd-items uefacup hide">
                        <div className="gallery-grid">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full2.png" title="Football.png"><img
                                            src="assets/images/gallery/2.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full1.png" title="Football.png"><img
                                            src="assets/images/gallery/1.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full4.png" title="Football.png"><img
                                            src="assets/images/gallery/4.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full3.png" title="Football.png"><img
                                            src="assets/images/gallery/3.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full6.png" title="Football.png"><img
                                            src="assets/images/gallery/6.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full5.png" title="Football.png"><img
                                            src="assets/images/gallery/5.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filterd-items warmup hide">
                        <div className="gallery-grid">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full1.png" title="Football.png"><img
                                            src="assets/images/gallery/1.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full2.png" title="Football.png"><img
                                            src="assets/images/gallery/2.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full3.png" title="Football.png"><img
                                            src="assets/images/gallery/3.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full4.png" title="Football.png"><img
                                            src="assets/images/gallery/4.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full5.png" title="Football.png"><img
                                            src="assets/images/gallery/5.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full6.png" title="Football.png"><img
                                            src="assets/images/gallery/6.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filterd-items national hide">
                        <div className="gallery-grid">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full2.png" title="Football.png"><img
                                            src="assets/images/gallery/2.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full1.png" title="Football.png"><img
                                            src="assets/images/gallery/1.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full4.png" title="Football.png"><img
                                            src="assets/images/gallery/4.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full3.png" title="Football.png"><img
                                            src="assets/images/gallery/3.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full6.png" title="Football.png"><img
                                            src="assets/images/gallery/6.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gallery-item">
                                        <a className="gallery-image image-popup-vertical-fit"
                                           href="assets/images/gallery/full5.png" title="Football.png"><img
                                            src="assets/images/gallery/5.png" alt="gallery-image"/>
                                            <button className="pop-btn"><i className="fal fa-plus"></i></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;