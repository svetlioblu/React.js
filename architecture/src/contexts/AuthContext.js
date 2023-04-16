import { createContext, useContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {


    const onLogin = (e, userLogIn) => {
        e.preventDefault()
        console.log(`${userLogIn.email}  ${userLogIn.pass} `);
    }

    const contextValues = {
        onLogin
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
