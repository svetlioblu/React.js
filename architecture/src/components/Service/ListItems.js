import { useEffect, useState } from "react"

import { Item } from "./Item"
import * as dataService from "../../services/dataService.js"


export const ListItems = () => {
    const [listItems, setlistItems] = useState([])
    useEffect(() => {
        dataService.getAll()
            .then(setlistItems)

    }, [])

    return (
        <div className="row equal-height-columns">
            {listItems.map(x => <Item key={x._id} listItems={listItems} />)}
        </div>
    )
}