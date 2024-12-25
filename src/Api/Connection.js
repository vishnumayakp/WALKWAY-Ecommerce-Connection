import axios from 'axios'
import axiosInstance from './axiosInstance';

var token=localStorage.getItem('authToken')

const PRODUCT_LIST="http://localhost:5000/products";
const USERS_LIST="http://localhost:5000/users";


export async function getProducts(){
    return await axiosInstance.get("/Product/All")
}
export async function getProductById(id){
    return await axiosInstance.get(`/Product/${id}`)
}

export async function getProductByCategory(category){
    return await axiosInstance.get(`/Product/GetByCategory?category=${category}`)
}

export async function searchProducts(data){
    return axiosInstance.get(`/Product/search?searchword=${data}`)
}

export function addSignup(data){
    return axiosInstance.post("/Auth/Register",data)
}

export function login(data){
    return axiosInstance.post("/Auth/Login",data)
}

export function getAllUsers(){
    return axios.get(USERS_LIST)
}

export function getUserById(id){
    return axiosInstance.get(`${USERS_LIST}`)
}

export async function addToCart(productId,quantity){
    const res= await  axiosInstance.post(`/Cart/AddToCart/${productId}?quantity=${quantity}`)
    return (res.data.data)
}

export async function getCartById(){
   const res= await axiosInstance.get(`/Cart/GetCartItems`)
//    console.log('Full Response:', res.data.data.cartItems);
  return (res.data.data)
}

export async function cartIncrement(productId){
    const res=await axiosInstance.put(`/Cart/IncreaseQty/${productId}`)
    console.log('Response',res.data);
    return (res.data.data)
}

export async function cartDecrement(productId){
    const res=await axiosInstance.put(`/Cart/DecreaseQty/${productId}`)
    console.log('Response',res.data);
    return (res.data.data)
}

export async function removeFromCart(productId){
    const res=await axiosInstance.delete(`/Cart/${productId}`)
    return (res.data.data)
}

export async function addOrRemoveWishList(productId){
    const res= await axiosInstance.get(`/WishList/AddOrReomve/${productId}`)
    // console.log('Full Response:', res.data.statusCode);
    return (res.data)
}

export async function getWishListById(){
    const res= await axiosInstance.get(`/WishList/WishList`)
//    console.log('Full Response:', res);
  return (res.data.data)
}



export async function getAddressById(id){
   const res= await axios.get(`${USERS_LIST}/${id}`)
   return (res.data.address)
}
export function updateCartById(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,data)
}
export function updateAddressById(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,data)
}

export async function getOrderById(id){
    const res= await axios.get(`${USERS_LIST}/${id}`)
    return (res.data.orders)
}

export function updateOrderById(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,data)
}

// Admin-side

export function AddProductDetails(data){
    return axios.post (PRODUCT_LIST,data)
}

export function updateProductById(id,data){
    return axios.patch(`${PRODUCT_LIST}/${id}`,data)
}

export function deleteProductById(id){
    return axios.delete(`${PRODUCT_LIST}/${id}`)
}

export function updateUserStatus(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,{status:data})
}
