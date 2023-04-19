import { useAuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export const RouteGuard = ({ children }) => {
    const { userAuth } = useAuthContext()

    if (!userAuth.accessToken) {
        return <Navigate to='/Login' />
    }

    return (
        <>
            {children}
        </>
    )
}