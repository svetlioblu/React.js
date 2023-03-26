export const Navigation = () => {
    return (
        <nav className="one-page-header one-page-header-style-2 navbar navbar-default navbar-fixed-top architecture-nav one-page-nav-scrolling one-page-nav__fixed" role="navigation">
            <div className="container">
                <div className="page-scroll">
                    <a className="logo-link navbar-brand logo-left" href="#intro">
                        <img className="default-logo" src="assets/img/logo-light.png" alt="Logo" />
                        <img className="shrink-logo" src="assets/img/logo-dark.png" alt="Logo" />
                    </a>
                </div>

                <div className="menu-container page-scroll">
                    <button type="button" className="navbar-toggle pull-right" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="container no-padding-left ">
                    <div className="row collapse navbar-collapse navbar-ex1-collapse">
                        <div className="col-md-5 no-side-padding">
                            <div className="left">
                                <div className="menu-container">
                                    <ul className="nav navbar-nav">
                                        <li className="page-scroll home">
                                            <a href="#body">Home</a>
                                        </li>
                                        <li className="page-scroll">
                                            <a href="#about">About</a>
                                        </li>
                                        <li className="page-scroll">
                                            <a href="#services">Services</a>
                                        </li>
                                        <li className="page-scroll">
                                            <a href="#projects">Projects</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 no-side-padding">
                            <div className="center-block logo page-scroll">
                                <a className="logo-link navbar-brand logo-centered" href="#intro" >
                                <img className="default-logo" src="assets/img/logo-light.png" alt="Logo" />
                                <img className="shrink-logo" src="assets/img/logo-dark.png" alt="Logo" />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-5 no-side-padding">
                        <div className="right">
                            <div className="menu-container">
                                <ul className="nav navbar-nav">
                                    <li className="page-scroll">
                                        <a href="#team">Team</a>
                                    </li>
                                    <li className="page-scroll home">
                                        <a href="#gallery">Processes</a>
                                    </li>
                                    <li className="page-scroll">
                                        <a href="#awards">Awards</a>
                                    </li>
                                    <li className="page-scroll">
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</nav >
    )
}