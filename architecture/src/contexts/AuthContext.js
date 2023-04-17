import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as userService from "../services/userService.js"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [userAuth, setUserAuth] = useState({})

    const onLogin = async (e, userLogIn) => {
        e.preventDefault()

        const result = await userService.logIn(userLogIn)
        setUserAuth(result)
        navigate('/')
    }

    const onLogOut = async (token) => {
        console.log('logged out')
        await userService.logOut(token)
    }

    const contextValues = {
        onLogin,
        onLogOut,
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
