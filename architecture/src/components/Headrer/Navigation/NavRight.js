import { Link } from 'react-router-dom'


export const NavRight = () => {
    return (
        <div className="col-md-5 no-side-padding">
            <div className="right">
                <div className="menu-container">
                    <ul className="nav navbar-nav">
                        <li className="page-scroll">
                            <Link to="/LogIn">Log in</Link>
                        </li>
                        <li className="page-scroll home">
                            <a href="#gallery">Register</a>
                        </li>

                        {/* <li className="page-scroll">
                            <a href="#team">My projects</a>
                        </li>
                        <li className="page-scroll home">
                            <a href="#gallery">Log out</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}