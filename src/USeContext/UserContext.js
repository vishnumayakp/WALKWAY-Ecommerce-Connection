import React, { Children, createContext, useEffect } from "react";
import { useState } from "react";
import { getAllUsers, getSignUp } from "../Api/Connection";
import { useNavigate } from "react-router-dom";


export const AuthContext=createContext()

export const UserAuth = ({children})=>{
    const navigate=useNavigate()
    const [user,setUser]=useState([])
    const [error,setError]=useState('')
    const [userId,setUserId]=useState("");

    useEffect(()=>{
        getAllUsers()
        .then((res)=>setUser(res.data))
    },[])

    function userDataValidate(data){
        (user.find((value)=>{
            if(value.email===data.email && value.password === data.password){
                localStorage.setItem('userId',value.id)
                navigate('/')
                
            }else{
                console.log('login failed');
                
            }
        
        }))
    }

    return (
        <AuthContext.Provider value={{userDataValidate}}>
            {children}
        </AuthContext.Provider>
    )
    
}

