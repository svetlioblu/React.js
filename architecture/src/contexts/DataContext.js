import { createContext, useContext, useState } from 'react'



export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [listItems, setlistItems] = useState([])
    const [myListItems, setMyListItems] = useState([])
    const [details, setDetails] = useState({})
    const [editId, seteditId] = useState('')

    const onDetailsClick = (id, img, title, text) => {
        setDetails({ id, img, title, text })
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
        onDetailsClick
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