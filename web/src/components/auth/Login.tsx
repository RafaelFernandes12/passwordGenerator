import { RegisterForm } from "./RegisterForm";
import { auth, provider } from '../../firebase/config'
import { GoogleAuthProvider, isSignInWithEmailLink, signInWithEmailAndPassword,signInWithEmailLink,signInWithPopup,User } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

export function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate()


    localStorage.clear()
    
    
    function logInWithEmailAndPassword(){
        // if (isSignInWithEmailLink(auth, window.location.href)) {
        //     let email = window.localStorage.getItem('emailForSignIn');
        //     console.log('estive aqui')
        //     if (!email) {
        //         email = window.prompt('Please provide your email for confirmation');
        //     }
        //     signInWithEmailLink(auth, email!, window.location.href)
        //         .then((result) => {
        //             console.log(result)
        //             window.localStorage.removeItem('emailForSignIn');
        //         })
        //         .catch((e) => {
        //             console.log(e)
        //         });
         signInWithEmailAndPassword(auth,email,password)
            .then(() => {
                console.log('user is in')
                navigate('/Home')
            })
            .catch((e) => {
                console.log(e)
                setError('password or email incorrect')
            })
        }
    function logInWithGoogle(){
        auth.useDeviceLanguage()

        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/Home')
                console.log('user logged with google')
            }).catch((e) => {
                console.log(e)
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
                onClick={logInWithEmailAndPassword}
                >
                    Log In
                </button>
                <p className="text-red-600 text-center">{error}</p>
            </div>
            <p>Or sign In using</p>
            <div className="bg-red-700 p-2 rounded-full mb-10 mt-4">
                <button onClick={logInWithGoogle}><GoogleIcon className="text-white"/></button>
            </div>
            <p>Doesnt have an Acount? <a href="./Register" className="underline text-blue-600">Sign up</a></p>
        </div>
    )
}