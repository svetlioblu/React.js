import { useEffect, useState } from "react"

import { Item } from "./Item"
import * as dataService from "../../services/dataService.js"


export const ListItems = () => {
    const [listItems, setlistItems] = useState([])
    useEffect(() => {
        const getAllServices = dataService.getAll()
        setlistItems(getAllServices)
        
    }, [])

    return (
        <div className="row equal-height-columns">
            <Item />
        </div>
    )
}