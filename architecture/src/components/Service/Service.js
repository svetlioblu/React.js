import { useEffect } from "react"


import { ListItems } from "./ListItems"
import { ModalDetails } from "./ModalDetails"
import { NoDataError } from "../Errors/NoDataError"
import * as dataService from "../../services/dataService.js"

import { useDataContext } from "../../contexts/DataContext"


export const Service = () => {
    const { listItems, setlistItems, details, onDetailsClick } = useDataContext()


    useEffect(() => {
        dataService.getAll()
            .then(setlistItems)
    }, [setlistItems])

    
    // const onDetailsClick = (id, img, title, text) => {
    //     setDetails({ id, img, title, text })
    // }

    return (
        <section id="service">
            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">What We Offer</em> All for your comfort</h2>
                </div>

                {listItems.code === 404 ?
                    <NoDataError />
                    : <ListItems listItems={listItems} onDetailsClick={onDetailsClick} />
                }
                <ModalDetails {...details} />
            </div>
        </section>
    )

}