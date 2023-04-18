import { useState } from "react"

import { ListItems } from "../Service/ListItems"
import { ModalDetails } from "../Service/ModalDetails"
import { NoDataError } from "../Errors/NoDataError"
import * as dataService from "../../services/dataService.js"

import { useDataContext } from "../../contexts/DataContext"
import { useAuthContext } from "../../contexts/AuthContext"

export const MyProjects = () => {
    const { listItems, setlistItems } = useDataContext()
    const { userAuth } = useAuthContext()
    const [details, setDetails] = useState({})


    const myListItems = listItems.filter(x => x._ownerId === userAuth._id)


    const onDetailsClick = (id, img, title, text) => {
        setDetails({ id, img, title, text })
    }

    return (
        <section id="service">
            {console.log(myListItems)}
            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">Your Projects</em> </h2>
                </div>

                {myListItems.length === 0 ?
                    <NoDataError />
                    : <ListItems listItems={myListItems} onDetailsClick={onDetailsClick} />
                }
                <ModalDetails {...details} />
            </div>
        </section>
    )

}