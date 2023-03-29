export const NavLeft = () => {
    return (
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
    )
}