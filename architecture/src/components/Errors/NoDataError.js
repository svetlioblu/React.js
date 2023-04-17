import { useNavigate } from 'react-router-dom'
export const NoDataError = () => {
    const navigate = useNavigate()
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="error-v2">
                        <span className="error-v2-title">Add Services</span>
                        <span>That’s an error!</span>
                        <p>There were no data fond. <br /> Please, Log in/Register and add some services.</p>
                        <button className="btn-u btn-u-dark rounded-2x" onClick={() => { navigate('/') }}>Go Back  <i className="fa fa-clock-o"></i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}