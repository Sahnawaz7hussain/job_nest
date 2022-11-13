import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoute ({children}) {


    let obj = JSON.parse(localStorage.getItem("loginData")) || {};

    if(obj.name === undefined) {
        return <Navigate to="/signin"/>
    }

   return children
};

export default AuthRoute;