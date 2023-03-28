
export const About = () => {

    return (
        <section id="about">
            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">What We Offer</em> All for your comfort</h2>
                </div>


                <div className="row equal-height-columns">
                    <div className="col-md-3 service service-1">
                        <div className="service-in img-hover-1 equal-height-column">
                            <span aria-hidden="true" className="icon-picture icon"></span>
                            <h3>Exterior<br />Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>

                    <div className="col-md-3 service service-2">
                        <div className="service-in img-hover-2 equal-height-column">
                            <span aria-hidden="true" className="icon-loop icon"></span>
                            <h3>Interior<br />Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>

                    <div className="col-md-3 service service-3">
                        <div className="service-in img-hover-3 equal-height-column">
                            <span aria-hidden="true" className="icon-note icon"></span>
                            <h3>Project<br />Documentation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>

                    <div className="col-md-3 service service-4">
                        <div className="service-in img-hover-4 equal-height-column">
                            <span aria-hidden="true" className="icon-map icon"></span>
                            <h3>Choice of<br />Land</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>
                </div>

                {/* <!-- modal popup window --> */}
                <div className="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <button aria-hidden="true" data-dismiss="modal" className="close" type="button"><i className="fa fa-times"></i></button>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modal-top margin-bottom-40">
                                    <img src="assets/img-temp/wp6.jpg" alt="" />
                                </div>

                                <div className="modal-bot g-heading-v7">
                                    <h3 className="g-color-white">Omom sociis natoque penatibus</h3>
                                    <p className="margin-bottom-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>

                                    <p className="margin-bottom-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>

                                    <p className="margin-bottom-30"><img src="assets/img-temp/wp5.jpg" alt="" /></p>

                                    <p className="margin-bottom-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>

                                    <p className="margin-bottom-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}