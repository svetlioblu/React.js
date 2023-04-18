import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export const Register = () => {
    const { onRegister } = useAuthContext()
    const [noEntry, setnoEntry] = useState(false)
    const [lessMailChars, setlessMailChars] = useState(false)
    const [lessPassChars, setlessPassChars] = useState(false)

    const [userRegister, setuserRegister] = useState({
        email: '',
        password: ''
    })

    const onRegisterHandler = (e) => {
        e.preventDefault()
        if (userRegister.email === '' || userRegister.password === '') {
            setnoEntry(true)
            return
        }
        if (userRegister.email.length <= 6) {
            setlessMailChars(true)
            return
        }
        if (userRegister.password.length <= 5) {
            setlessPassChars(true)
            return
        }
        onRegister(e, userRegister)
    }

    return (
        <div className="container">
            <div className="reg-block">
                <div className="reg-block-header">
                    <h2>Register</h2>
                    {noEntry && <p style={{ "color": "red" }}> There are empty fields !!!</p>}
                    {lessMailChars && <p style={{ "color": "red" }}> The email is not valid !!</p>}
                    {lessPassChars && <p style={{ "color": "red" }}> The Password shold be at least 5 chars !</p>}

                    <p>Do you Have Account? Click <Link to="/Login">Log In</Link> to sign in.</p>
                </div>
                <form onSubmit={(e) => { onRegisterHandler(e) }}>
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