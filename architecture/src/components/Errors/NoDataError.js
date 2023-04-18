import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'

export const NoDataError = () => {
    const navigate = useNavigate()
    const { userAuth } = useAuthContext()

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="error-v2" style={{ "margin": "25px 0" }}>
                        <span className="error-v4-title">Add Services</span>
                        <span> <i className="fa fa-map-signs fa-sm"></i></span>
                        <p>There were no data fond. <br /> Please, Log in/Register and add some services.</p>
                        {!userAuth.accessToken ?
                            (<button className="btn-u btn-u-dark rounded-2x" onClick={() => { navigate('/logIn') }}>Log in</button>)
                            :(<button className="btn-u btn-u-danger btn-lg" onClick={() => { navigate('/create') }}>Add Services</button>)                    
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}