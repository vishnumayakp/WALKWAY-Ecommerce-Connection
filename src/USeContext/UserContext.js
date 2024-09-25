import React, { Children, createContext, useEffect } from "react";
import { useState } from "react";
import { getAllUsers, getCartById, getSignUp } from "../Api/Connection";
import { useNavigate } from "react-router-dom";


export const AuthContext=createContext()

export const UserAuth = ({children})=>{
    const id = localStorage.getItem('userId')
    const navigate=useNavigate()
    // const [user,setUser]=useState([])
    const [error,setError]=useState('')
    const [userId,setUserId]=useState("");
    const [cartFlag, setCartFlag]=useState(false)
    // useEffect(()=>{  
    // },[])

     function userDataValidate(data){
       getAllUsers().then((user) => {
        (user && user.data.find((value)=>{
            if(value.email===data.email && value.password === data.password){
                localStorage.setItem('userId',value.id)
                navigate('/')
                
            }else{
                console.log('login failed');
                
            }
        }))
       })
       
    }

    return (
        <AuthContext.Provider value={{userDataValidate,cartFlag,setCartFlag}}>
            {children}
        </AuthContext.Provider>
    )
    
}

