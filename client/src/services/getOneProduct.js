import { FetchGet } from "../helpers/AxiosMethod"


export const getOneProduct = async (id)=>{
    let product
    try {
        product = await FetchGet(`/product/${id}`)
    } catch (error) {
        console.log(error)
    }

    return product
}