import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as dataService from '../services/dataService.js'


export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const navigate = useNavigate()
    const [listItems, setlistItems] = useState([])
    const [myListItems, setMyListItems] = useState([])
    const [details, setDetails] = useState({})
    const [editId, seteditId] = useState('')

    const onDetailsClick = (id, img, title, text) => {
        setDetails({ id, img, title, text })
    }

    const onDelete = async (id, token) => {

        await dataService.del(id, token)
            
            .then(
                () => {
                    const filtered = myListItems.filter(x => x._id !== id)
                    setMyListItems(filtered)
                }
            )

    }

    const onEdit = (id) => {
        seteditId(id)
        navigate('/edit')
    }

    const contextValues = {
        listItems,
        details,
        editId,
        myListItems,
        setMyListItems,
        setlistItems,
        setDetails,
        seteditId,
        onDetailsClick,
        onDelete,
        onEdit
    }

    return (
        <>
            <DataContext.Provider value={contextValues}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export const useDataContext = () => {
    const context = useContext(DataContext)

    return context
}