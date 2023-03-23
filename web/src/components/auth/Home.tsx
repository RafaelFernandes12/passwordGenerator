import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../../firebase/config'
export function Home(){

    const user = auth.currentUser
    const navigate = useNavigate()
    function out(){
        signOut(auth)
        navigate('/Login')
    }

    return(
        <>
            <p>You should see me, only if you are logged in {user?.email}</p>
            <button onClick={out}>signOut</button>
        </>
    )
}