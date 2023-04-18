import { useNavigate } from 'react-router-dom'

import { Item } from "./Item"
import { useAuthContext } from "../../contexts/AuthContext"

export const ListItems = ({ listItems, onDetailsClick }) => {
    const { userAuth } = useAuthContext()
    const navigate = useNavigate()

    return (
        <>
            <div className="row equal-height-columns">
                {/* {console.log(listItems)} */}
                {listItems.map(x => <Item key={x._id} {...x} onDetailsClick={onDetailsClick} />)}

            </div>
            {!userAuth.accessToken ?
                ""
                : (<div className="row equal-height-columns" style={{ "marginTop": "10px" }}><button className="btn btn-danger" onClick={() => { navigate('/create') }}>Add Service</button></div>)}
        </>
    )
}