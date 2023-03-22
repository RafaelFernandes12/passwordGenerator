import { RegisterForm } from "./RegisterForm"
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ErrorText } from "../shared/ErrorText";



export function Register(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [error, setError] = useState('')

    async function createUser(){
        setError('')
        if(password !== confirm) return setError('passwords doesnt match') 

            await createUserWithEmailAndPassword(auth,email,password)
            .then(() => {
                setError('An email has been sent to your account, please verify it to log in')
            })
            .catch(error => {
                console.log(error);
    
                if(error.code.includes('auth/weak-password'))
                {
                    setError('A senha deve ter ao menos 6 caracteres')
                }
                else if('auth/invalid-email' || 'auth/email-already-exists'){
                    setError('Insira um email valido')
                }
                else{
                    setError('Impossivel se registrar, tente novamente mais tarde.')
                }
            })    
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl m-10">Register</h1>
            <p>Kindly fill in the form to register</p>
            <div className="flex flex-col m-5 w-1/4">
                <RegisterForm title="Username" 
                placeholderTitle="Enter Username" 
                type="text"
                />
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
                <RegisterForm type="password"
                    title="Repeat Password" 
                    placeholderTitle="Repeat Password"
                    value={confirm}
                    onChange={(e: any) => setConfirm(e.target.value)}
                />
                <button className="bg-bgButton text-white p-2 mt-5 rounded"
                onClick={createUser}
                >
                    Register
                </button>
                <ErrorText error={error} />
            </div>
            <p>Already have an Acount? <a href='./Login' className="underline text-blue-600">Log In</a></p>
        </div>
    )
}