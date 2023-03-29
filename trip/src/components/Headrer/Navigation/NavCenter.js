import { Component } from "react";

export default class NavCenter extends Component {

    render() {
        return (
            <div className="col-md-2 no-side-padding">
                <div className="center-block logo page-scroll">
                    <a className="logo-link navbar-brand logo-centered" href="#intro" >
                        <img className="default-logo" src="assets/img/logo-light.png" alt="Logo" />
                        <img className="shrink-logo" src="assets/img/logo-dark.png" alt="Logo" />
                    </a>
                </div>
            </div>
        )
    }
}