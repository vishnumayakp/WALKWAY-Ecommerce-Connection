import React from "react";
import { Navigate } from "react-router-dom";

const AdminRouter= ({children})=>{
    const isLoggedIn=!!localStorage.getItem('authToken');
    const isAdmin=localStorage.getItem('role')=== 'admin';

    if(!isLoggedIn){
        return <Navigate to='/login'/>;
    }

    if (!isAdmin){
        return <Navigate to='/'/>;
    }

    return children;
}

export default AdminRouter;