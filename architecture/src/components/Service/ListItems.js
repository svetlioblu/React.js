import { Item } from "./Item"
import { useAuthContext } from "../../contexts/AuthContext"

export const ListItems = ({ listItems, onDetailsClick }) => {
    const { userAuth } = useAuthContext()
    return (
        <>
            <div className="row equal-height-columns">
                {listItems.map(x => <Item key={x._id} {...x} onDetailsClick={onDetailsClick} />)}

            </div>
            {!userAuth.accessToken ?
                ""
                : (<div className="row equal-height-columns" style={{ "marginTop": "10px" }}><button className="btn btn-danger">Add Service</button></div>)}
        </>
    )
}