import { useLocation } from 'react-router-dom'

import { useDataContext } from '../../contexts/DataContext'
import { useAuthContext } from '../../contexts/AuthContext'

export const Item = ({ label, icon,
    description, _id,
    detilesTitle, detailsImg,
    detailsText }) => {

    const location = useLocation()
    const { onDetailsClick, onEdit, onDelete } = useDataContext()
    const { userAuth } = useAuthContext()
    return (

        < div className="col-md-3 service service-2" >
            <div className="service-in img-hover-2 equal-height-column">
                <span aria-hidden="true" className={`icon-${icon} icon`}></span>
                <h3>{label}</h3>
                <p>{description}</p>
                <button className="service-btn" data-toggle="modal" data-target="#myModal" style={{ "marginBottom": "15px" }} onClick={() => onDetailsClick(_id, detailsImg, detilesTitle, detailsText)}>Read More</button>  <br />
                {location.pathname === '/myProjects' ?
                    (
                        <>
                            <button className="btn-u btn-u-dark" onClick={() => onEdit(_id)} ><i className="fa fa-file-text-o" ></i></button>
                            <button className="btn-u btn-u-dark " style={{ "marginLeft": "10px" }} onClick={() => onDelete(_id, userAuth.accessToken)}><i className="fa fa-trash-o"></i></button>
                        </>
                    )
                    : ""
                }
            </div>
        </div >
    )
}