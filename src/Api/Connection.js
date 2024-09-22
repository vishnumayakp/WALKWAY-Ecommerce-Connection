import axios from 'axios'



const PRODUCT_LIST="http://localhost:5000/products";



export function getProducts(){
    return axios.get(PRODUCT_LIST)
}
export async function getProductById(id){
    return await axios.get(`${PRODUCT_LIST}/${id}`)
}

export async function getProductByCategory(category){
    return await axios.get(`${PRODUCT_LIST}/${category}`)
}