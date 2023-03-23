import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/config"

export function userState(){
    const navigate = useNavigate()

    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const sub = auth.onAuthStateChanged((sub) => {
        if(sub){
            console.log('user detected')
        }
        else{ 
            console.log('no user here')
        }
        setLoading(false)
        })
        return () => {
            sub()
        }
    },[])

    
    return {
        loading: loading,
    }

}