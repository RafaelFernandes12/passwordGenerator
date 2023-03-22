import { signOut } from "firebase/auth";
import {auth} from '../firebase/config'
export function Home(){

    const user = auth.currentUser

    return(
        <>
            <p>You should see me, only if you are logged in {user?.email}</p>
            <button onClick={() => signOut(auth)}>signOut</button>
        </>
    )
}