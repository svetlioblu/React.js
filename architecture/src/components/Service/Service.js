import { useEffect, useState } from "react"


import { ListItems } from "./ListItems"
import * as dataService from "../../services/dataService.js"
import { ModalDetails } from "./ModalDetails"



export const Service = () => {
    const [listItems, setlistItems] = useState([])
    const [details, setDetails] = useState({})
    // To do If no entries !
    useEffect(() => {
        dataService.getAll()
            .then(setlistItems)
    }, [])

    const onDetailsClick = (id, img, title, text) => {
        setDetails({ id, img, title, text })
    }

    return (
        <section id="service">
            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">What We Offer</em> All for your comfort</h2>
                </div>
                <ListItems listItems={listItems} onDetailsClick={onDetailsClick} />

                <ModalDetails {...details} />
            </div>
        </section>
    )

}