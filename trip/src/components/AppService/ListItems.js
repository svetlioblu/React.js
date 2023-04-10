export const ListItems = () =>{
    return (
        <div className="row equal-height-columns">
                    <div className="col-md-3 service service-2">
                        <div className="service-in img-hover-2 equal-height-column">
                            <span aria-hidden="true" className="icon-picture icon"></span>
                            {/* Up to 16 char */}
                            <h3>Exterior Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>

                    <div className="col-md-3 service service-2">
                        <div className="service-in img-hover-1 equal-height-column">
                            <span aria-hidden="true" className="icon-loop icon"></span>
                            <h3>Interior Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>

                    <div className="col-md-3 service service-2">
                        <div className="service-in img-hover-3 equal-height-column">
                            <span aria-hidden="true" className="icon-note icon"></span>
                            <h3>Documentation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>

                    <div className="col-md-3 service service-2">
                        <div className="service-in img-hover-4 equal-height-column">
                            <span aria-hidden="true" className="icon-map icon"></span>
                            <h3>Choice of Land</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                            <button className="service-btn" data-toggle="modal" data-target="#myModal">Read More</button>
                        </div>
                    </div>
                </div>
    )
}