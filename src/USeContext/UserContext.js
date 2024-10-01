import React, { Children, createContext, useEffect } from "react";
import { useState } from "react";
import { getAllUsers, getCartById, getSignUp } from "../Api/Connection";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


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
        let response;
       getAllUsers().then((user) => {
        if(data && user.data){
            if(data.email==='admin@gmail.com' && data.password==='123456'){
               localStorage.setItem('authToken' ,'adminToken')
               localStorage.setItem('role' ,'admin')
               localStorage.setItem('userId' ,'adminUserId')
               navigate('/admin');
               return;
            }else{
                response= user.data.find((value)=>{   
                    return value.email===data.email && value.password === data.password 
                 });
            }

            if(response){
                if(response.status){
                    toast.error("Your Account is blocked",{position:'top-center'})
                }else{
                    // setting token,role,and userid from the found user
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('role', response.role)
                localStorage.setItem('userId', response.id)
                if(response.role==='admin'){
                    navigate('/admin')
                }else{
                    navigate('/')
                }
                }
            }else{
                setError('Login Failed: Invalid email or password')
                toast.error("Incorrect email or Password",{position:'top-center'})   
            }    
        }
       }).catch((error)=>{
        setError('An error occurred during login login')
        console.log('Login error',error);
        
       })
       
    }

    return (
        <AuthContext.Provider value={{userDataValidate,cartFlag,setCartFlag,error}}>
            {children}
        </AuthContext.Provider>
    )
    
}

