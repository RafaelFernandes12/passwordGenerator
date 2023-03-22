import { initializeApp } from "firebase/app";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { RouteProtector } from "../components/RouteProtector";
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