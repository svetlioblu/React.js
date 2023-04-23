import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ListItems } from "../Service/ListItems"
import { ModalDetails } from "../Service/ModalDetails"
import { NoDataError } from "../Errors/NoDataError"
import * as dataService from "../../services/dataService.js"

import { useDataContext } from "../../contexts/DataContext"
import { useAuthContext } from "../../contexts/AuthContext"

export const MyProjects = () => {
    const navigate = useNavigate()
    const { userAuth } = useAuthContext()
    const { listItems, setDetails, seteditId, myListItems, setMyListItems } = useDataContext()

    useEffect(() => {
        const currentMyList = listItems.filter(x => x._ownerId === userAuth._id)
        setMyListItems(currentMyList)
    },[])
    
    const onDetailsClick = (id, img, title, text) => {
        setDetails({ id, img, title, text })
    }

    const onDelete = async (id) => {
        await dataService.del(id, userAuth.accessToken)
        navigate('/services')
    }

    const onEdit = (id) => {
        seteditId(id)
        navigate('/edit')
    }

    return (
        <section id="service">

            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">Your Projects</em> </h2>
                </div>

                {myListItems.length === 0 ?
                    <NoDataError />
                    : <ListItems listItems={myListItems} onDetailsClick={onDetailsClick} onDelete={onDelete} onEdit={onEdit} />
                }
                <ModalDetails />
            </div>
        </section>
    )
}