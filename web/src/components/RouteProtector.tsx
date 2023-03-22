import { Navigate } from "react-router-dom";
import { auth } from "../firebase/config";

interface RouteProtectorProps{
    children: React.ReactNode
}

export function RouteProtector({children}:RouteProtectorProps){

    if(!auth.currentUser) return <Navigate to='/Login' />
    
    return(
        <>{children}</>
    )
}