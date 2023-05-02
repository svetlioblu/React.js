import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    //check/take if has existing key:value in the localStorage From the useState initial Value
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key)
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized)

            return persistedState
        }
        return initialValue
    })


    // if not set it in the state and in the localStorage to have persistance
    const setLocalStorageState = (value) => {
        setState(value)
        if (Object.keys(value).length === 0) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }
    return [
        state,
        setLocalStorageState
    ]
}

