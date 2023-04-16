import { useNavigate } from 'react-router-dom'
export const Error404 = () => {
    const navigate = useNavigate()
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="error-v2">
                        <span className="error-v2-title">404</span>
                        <span>That’s an error!</span>
                        <p>The requested URL was not found on this server. <br /> That’s all we know.</p>
                        <button className="btn-u btn-u-dark rounded-2x" onClick={() => { navigate('/') }}>Go Back  <i class="fa fa-reply-all"></i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}