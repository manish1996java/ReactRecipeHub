import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedGuard = ({children}) => {
    console.log("protectedGuard",ProtectedGuard);
    const isAuth = useSelector((state)=>{
        console.log("state",state.authReducer.isAuth);
        return state.authReducer.isAuth
    })
    const navigate = useNavigate();


    useEffect(()=>{
        console.log('useEffect  isAuth',isAuth);
        if(!isAuth){
            navigate("/");
        }
    },[isAuth,navigate])

    return isAuth ? children: null;
};

export default ProtectedGuard;