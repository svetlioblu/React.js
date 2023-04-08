export const Footer = () => {
    return (
        <div id="footer-v5" className="footer-v5">
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 sm-margin-bottom-40">
                            <div className="heading-footer"><h2>About Us</h2></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit ut metus a commodo. Pellentesque congue tellus sed enim sollicitudin, id blandit mauris eleifend.</p><br />
                            <ul className="list-inline dark-social-v2">
                                <li><a href="#"><i className="rounded-sm fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="rounded-sm fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="rounded-sm fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="rounded-sm fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="rounded-sm fa fa-tumblr"></i></a></li>
                                <li><a href="#"><i className="rounded-sm fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-md-6 sm-margin-bottom-40">
                            <div className="heading-footer"><h2>Recent News</h2></div>
                            <ul className="list-unstyled link-news">
                                <li>
                                    <a href="#">Apple Conference</a>
                                    <small>12 July, 2014</small>
                                </li>
                                <li>
                                    <a href="#">Bootstrap Update</a>
                                    <small>12 July, 2014</small>
                                </li>
                                <li>
                                    <a href="#">Themeforest Templates</a>
                                    <small>12 July, 2014</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <ul className="list-inline terms-menu">
                        <li className="silver">Copyright © 2023- All Rights Reserved</li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy and Policy</a></li>
                        <li><a href="#">License</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}