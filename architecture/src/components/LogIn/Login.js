// import styles from './Login.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export const LogIn = () => {
    const [userLogIn, setuserLogIn] = useState({
        email: '',
        password: ''
    })

    const { onLogin } = useAuthContext()

    return (
        <div className="container">
            <div className="reg-block">
                <div className="reg-block-header">
                    <h2>Sign In</h2>
                    <p>Don't Have Account? Click <Link to="/Register">Sign Up</Link> to registration.</p>
                </div>
                <form onSubmit={(e) => { onLogin(e, userLogIn) }}>
                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                        <input type="text" name="email" className="form-control" placeholder="Email" value={userLogIn.email} onChange={(e) => { setuserLogIn(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="text" name='password' className="form-control" placeholder="Password" value={userLogIn.password} onChange={(e) => { setuserLogIn(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    <hr />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" />
                            <p>Always stay signed in</p>
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <button type="submit" className="btn-u btn-block btn-u-brown">Log In</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}