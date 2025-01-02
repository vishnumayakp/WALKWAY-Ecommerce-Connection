import axios from 'axios'
import axiosInstance from './axiosInstance';

var token=localStorage.getItem('authToken')

const PRODUCT_LIST="http://localhost:5000/products";
const USERS_LIST="http://localhost:5000/users";


export async function getProducts(){
    const res= await axiosInstance.get("/Product/All")    
    return (res.data.data)
    
}
export async function getProductById(productId){
   const res= await axiosInstance.get(`/Product/${productId}`)
   return (res.data.data)
}

export async function getProductPaginated(page,size){
    const res= await axiosInstance.get(`/Product/pagination?pageNumber=${page}&size=${size}`)
    return (res.data)
}

export async function getProductByCategory(category){
    return await axiosInstance.get(`/Product/GetByCategory?category=${category}`)
}

// export async function updateProductById(productId){
//     const res=await axiosInstance.put(`/Product/${productId}`)
//     return (res.data.data)
// }

export async function searchProducts(data){
    return axiosInstance.get(`/Product/search?searchword=${data}`)
}

export function addSignup(data){
    return axiosInstance.post("/Auth/Register",data)
}

export function login(data){
    return axiosInstance.post("/Auth/Login",data)
}

export async function addToCart(productId,quantity,size){
    const res= await  axiosInstance.post(`/Cart/AddToCart/${productId}?quantity=${quantity}&size=${size}`)
    console.log('response',res);
    
    return (res.data.data)
}

export async function getCartById(){
   const res= await axiosInstance.get(`/Cart/GetCartItems`)
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

export function updateCartById(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,data)
}

export async function removeFromCart(productId){
    const res=await axiosInstance.delete(`/Cart/${productId}`)
    return (res.data.data)
}

export async function addOrRemoveWishList(productId){
    const res= await axiosInstance.get(`/WishList/AddOrReomve/${productId}`)
    return (res.data)
}

export async function getWishListById(){
    const res= await axiosInstance.get(`/WishList/WishList`)
  return (res.data.data)
}

export async function removeProductById(productId){
    const res=await axiosInstance.delete(`/WishList/removeproduct/${productId}`)
    return (res.data.data)
}

export async function createAddress(data){
   const res=await axiosInstance.post('Address/Add Address',data)
   return(res.data)
}

export async function getAddressById(){
   const res= await axiosInstance.get(`/Address/getAddress`)
   return (res.data.data)
}

export async function removeAddressById(id){
    const res= await axiosInstance.delete(`/Address/${id}`)
   console.log (res.data)
}

export function updateAddressById(data){
    console.log(data)
    return axiosInstance.put(`/Address/UpdateAddress`,data)
}

export function setAddressDefault(id){
    return axiosInstance.put(`/Address/set-default/${id}`)
}

export async function createOrder(price){    
    const res=await axiosInstance.post(`/Order/CreateOrder?price=${price}`)
    return (res)
    
}

// export async function getOrderById(){
//     const res= await axiosInstance.get(`/Order/getOrderDetails`)
//     return (res.data)
// }

export function updateOrderById(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,data)
}

// Admin-side

// export function AddProductDetails(data){
//     return axiosInstance.post('/Product/Add',data)
// }

export async function getAllOrders(){
    const res= await axiosInstance.get(`/Order/getAllOrders`)
    return (res.data.data)
}

export async function getOrderById(id){
    const res=await axiosInstance.get(`/Order/GetOrderByUserId/${id}`)
    return(res.data.data)
}

export async function getOrderDetails(){
    const res=await axiosInstance.get(`/Order/getOrderDetails`)
    return (res.data)
}

export async function updateOrderStatus(orderId,orderStatus){
    const res=await axiosInstance.patch(`/Order/update-OrderStatus?orderId=${orderId}&orderStatus=${orderStatus}`)
    return(res.data)
}

export async function showTotalRevenue(){
   const res= await axiosInstance.get(`/Order/TotalRevenue`)
   return(res.data)
}

export async function showTotalProductPurchased(){
    const res= await axiosInstance.get(`/Order/TotalProductsPurchased`)
    return(res.data)
}


export async function deleteProductById(id){
   const res = await axiosInstance.delete(`/Product/${id}`)
   return (res.data.data)
}

export function updateUserStatus(id,data){
    return axios.patch(`${USERS_LIST}/${id}`,{status:data})
}


export function getAllUsers(){
    return axiosInstance.get('/User/AllUsers')
}

export function getUserById(id){
    return axiosInstance.get(`/User/${id}`)
}

export async function blockUnblockUser(id){
    const res = await axiosInstance.patch(`/User/BlockOrUnblock/${id}`)
    return (res.data)
}