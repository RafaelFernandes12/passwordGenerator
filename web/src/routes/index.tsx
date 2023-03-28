import { initializeApp } from "firebase/app";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { RouteProtector } from "../components/auth/RouteProtector";
import { auth, firebaseConfig } from "../firebase/config";
import { Profile } from "../components/Profile";

initializeApp(firebaseConfig)

const user = auth.currentUser
const userId = user?.uid!

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home" element={<RouteProtector><Home/></RouteProtector>}/>
            <Route path='/Profile/:id' element={<RouteProtector><Profile/></RouteProtector>}/>
            <Route path="*" element={<Navigate to={'/Home'} />}/>
        </Routes>
    )
}