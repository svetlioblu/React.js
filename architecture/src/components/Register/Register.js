import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export const Register = () => {
    const { onRegister } = useAuthContext()
    const [userRegister, setuserRegister] = useState({
        email: '',
        password: ''
    })

    return (
        <div className="container">
            <div className="reg-block">
                <div className="reg-block-header">
                    <h2>Register</h2>
                    <p>Do you Have Account? Click <Link to="/Login">Log In</Link> to sign in.</p>
                </div>
                <form onSubmit={(e) => { onRegister(e, userRegister) }}>
                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                        <input type="text" name="email" className="form-control" placeholder="Email" value={userRegister.email} onChange={(e) => { setuserRegister(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="text" name='password' className="form-control" placeholder="Password" value={userRegister.password} onChange={(e) => { setuserRegister(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <button type="submit" className="btn-u btn-block btn-u-brown">Register</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}