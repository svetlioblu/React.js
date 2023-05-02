import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

import * as userService from "../services/userService.js"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    //use custom hook with decorated useState insted only useState
    const [userAuth, setUserAuth] = useLocalStorage('userAuth', {})

    const onLogin = async (e, userLogIn) => {
        e.preventDefault()

        await userService.logIn(userLogIn)
            .then(setUserAuth)
        navigate('/services')
    }

    const onLogOut = async (token) => {

        await userService.logOut(token)
            .then(setUserAuth({}))
            
    }

    const onRegister = async (e, userRegister) => {
        e.preventDefault()

        await userService.register(userRegister)
            .then(setUserAuth)
        navigate('/services')
    }
    const contextValues = {
        onLogin,
        onLogOut,
        onRegister,
        userAuth
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context
}
