import axios from 'axios'



const PRODUCT_LIST="http://localhost:5000/products";
const USERS_LIST="http://localhost:5000/users"


export function getProducts(){
    return axios.get(PRODUCT_LIST)
}
export async function getProductById(id){
    return await axios.get(`${PRODUCT_LIST}/${id}`)
}

export async function getProductByCategory(category){
    return await axios.get(`${PRODUCT_LIST}/${category}`)
}

export function addSignup(data){
    return axios.post(USERS_LIST,data)
}

export function getAllUsers(){
    return axios.get(USERS_LIST)
}

export function getUserById(id){
    return axios.get(`${USERS_LIST}/${id}`)
}

export async function getCartById(id){
   const res= await axios.get(`${USERS_LIST}/${id}`)
   return (res.data.cart)
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