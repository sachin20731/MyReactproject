import React from 'react';
import { Navigate } from 'react-router-dom'

export const Protectedlogout = ({react}) => {
    const user = localStorage.getItem("user")
    const pathname = window.location.pathname;


    if (!user){
        return <Navigate to = '/Login' replace />;
    }
    return react;
}

export const Protectedlogin = ({react}) => {
    const user = localStorage.getItem("user")
    const pathname = window.location.pathname;
    

    if (user){
        alert("You need to delete");
        return <Navigate to = '/Register' replace />;
    }
    return react;
}