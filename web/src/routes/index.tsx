import { initializeApp } from "firebase/app";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/auth/Home";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { RouteProtector } from "../components/auth/RouteProtector";
import { firebaseConfig } from "../firebase/config";

initializeApp(firebaseConfig)


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home" element={<RouteProtector><Home/></RouteProtector>}/>
            <Route path="*" element={<Navigate to={'/Home'} />}/>
        </Routes>
    )
}