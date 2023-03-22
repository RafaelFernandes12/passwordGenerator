import { RegisterForm } from "./RegisterForm";
import {auth} from '../firebase/config'
import { signInWithEmailAndPassword,User } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate()

    


    function logIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('user logged in')
                navigate('/Home')
            })
            .catch((error) => {
                console.log(error)
                setError('Email or password doesnt exist')
            });
    }
    

    return(
            <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl m-10">Log In</h1>
            <p>Kindly fill in the form to register</p>
            <div className="flex flex-col m-5 w-1/4">
                <RegisterForm title="Email"
                    type="email" 
                    placeholderTitle="Enter Email" 
                    value={email} 
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <RegisterForm title="Password"
                    type="password"
                    placeholderTitle="Enter Password" 
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <button className="bg-bgButton text-white p-2 mt-5 rounded"
                onClick={logIn}
                >
                    Log In
                </button>
                <p className="text-red-600 text-center">{error}</p>
            </div>
            <p>Doesnt have an Acount? <a href="./Register" className="underline text-blue-600">Sign up</a></p>
        </div>
    )
}