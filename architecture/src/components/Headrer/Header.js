import { NavLeft } from "./Navigation/NavLeft"
import NavCenter from "./Navigation/NavCenter"
import { NavRight } from "./Navigation/NavRight"


export const Header = () => {
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
                        <NavLeft />
                        <NavCenter/>
                        <NavRight />
                    </div>
                </div>
            </div>
        </nav >
    )
}