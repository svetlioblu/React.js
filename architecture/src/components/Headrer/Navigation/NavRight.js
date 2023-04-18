import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../contexts/AuthContext'

export const NavRight = () => {
    const { onLogOut, userAuth } = useAuthContext()

    return (
        <div className="col-md-5 no-side-padding">
            <div className="right">
                <div className="menu-container">
                    <ul className="nav navbar-nav">
                        {(!userAuth.accessToken) ?

                            (<>
                                <li className="page-scroll">
                                    <Link to="/LogIn">Log in</Link>
                                </li>
                                <li className="page-scroll home">
                                    <Link to="/Register">Register</Link>
                                </li>
                                <li className="page-scroll home">
                                <div ><i className="fa fa-user"></i> Guest</div>
                                </li>
                            </>)
                            : (<>
                                <li className="page-scroll">
                                    <a href="#team">My projects</a>
                                </li>
                                <li className="page-scroll home">
                                    <Link to="/" onClick={() => { onLogOut(userAuth.accessToken) }}>Log out</Link>
                                </li>
                                <li className="page-scroll home">
                                <div ><i className="fa fa-user"></i> {userAuth.email}</div>
                                </li>
                            </>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}