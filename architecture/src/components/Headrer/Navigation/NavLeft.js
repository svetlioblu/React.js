import { Link } from 'react-router-dom'
export const NavLeft = () => {
    return (
        <div className="col-md-5 no-side-padding">
            <div className="left">
                <div className="menu-container">
                    <ul className="nav navbar-nav">
                        
                        <li className="page-scroll home">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}