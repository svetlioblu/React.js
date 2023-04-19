import { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [listItems, setlistItems] = useState([])
    const [details, setDetails] = useState({})
    const [editId, seteditId] = useState('')
    // const [myListItems, setmyListItems] = useState([])



    const contextValues = {
        listItems,
        details,
        editId,
        setlistItems,
        setDetails,
        seteditId
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