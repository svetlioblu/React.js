import { useEffect } from "react"

import { ListItems } from "../Service/ListItems"
import { ModalDetails } from "../Service/ModalDetails"
import { NoDataError } from "../Errors/NoDataError"


import { useDataContext } from "../../contexts/DataContext"
import { useAuthContext } from "../../contexts/AuthContext"

export const MyProjects = () => {
  
    const { userAuth } = useAuthContext()
    const { listItems, myListItems, setMyListItems } = useDataContext()

    useEffect(() => {
        const currentMyList = listItems.filter(x => x._ownerId === userAuth._id)
        setMyListItems(currentMyList)
    },[])
    
   
    return (
        <section id="service">

            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">Your Projects</em> </h2>
                </div>

                {myListItems.length === 0 ?
                    <NoDataError />
                    : <ListItems listItems={myListItems} />
                }
                <ModalDetails />
            </div>
        </section>
    )
}