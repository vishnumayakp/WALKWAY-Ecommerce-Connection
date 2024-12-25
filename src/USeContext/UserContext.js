import React, { Children, createContext, useEffect } from "react";
import { useState } from "react";
import { getAllUsers, getCartById, getSignUp, login } from "../Api/Connection";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


export const AuthContext=createContext()

export const UserAuth = ({children})=>{
    const id = localStorage.getItem('userName')
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const [userId,setUserId]=useState("")
    const [cartFlag, setCartFlag]=useState(false)


     function userDataValidate(data){
       
        
       login(data).then((response) => {
        if(response.data.data.token){
            if(response.data.data.isBlocked){
                
            }else{
                // setting token,role,and userid from the found user
            localStorage.setItem('authToken', response.data.data.token)
            localStorage.setItem('role', response.data.data.role)
            localStorage.setItem('userName', response.data.data.userName)
            if(response.data.data.role==='admin'){
                navigate('/admin')
            }else{
                navigate('/')   
            }
            }
        }else{
            setError('Login Failed: Invalid email or password')    
        }    
       }).catch((error)=>{
        setError('An error occurred during login login')
        toast.error(error.response.data.message,{position:'top-center'})
        console.log('Login error',error);       
       });
       
    }

    return (
        <AuthContext.Provider value={{userDataValidate,cartFlag,setCartFlag,error}}>
            {children}
        </AuthContext.Provider>
    )
    
}

