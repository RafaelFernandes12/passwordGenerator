import { RegisterForm } from "./RegisterForm"
import {auth} from '../../firebase/config'
import {createUserWithEmailAndPassword, sendSignInLinkToEmail, signOut } from "firebase/auth";
import { useState } from "react";
import { ErrorText } from "../../shared/ErrorText";
import { PasswordGenerator } from "./PasswordGenerator";

export function Register(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [error, setError] = useState('')



    const actionCodeSettings = {
        url: 'http://localhost:5173/Login',
        handleCodeInApp: true,
    };




    async function createUser(){
        setError('')
        if(password !== confirm) return setError('passwords doesnt match') 

            await createUserWithEmailAndPassword(auth,email,password)
            .catch((e) => {
                console.log(e)
                setError('email or password invalid')
            })
            await signOut(auth)
            await sendSignInLinkToEmail(auth, email,actionCodeSettings)
            .then(() => {
                setError('An email has been sent to your account, please verify it to log in')
                window.localStorage.setItem('emailForSignIn', email);
                console.log('an email has been sent to your account')
            })
            .catch((e) => {
                console.log(e)
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
                <p className="text-center">Unsure what password to use? try a random one.</p>
                <PasswordGenerator />
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