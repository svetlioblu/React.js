import { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [listItems, setlistItems] = useState([])
    
    const contextValues = {
        listItems,
        setlistItems
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