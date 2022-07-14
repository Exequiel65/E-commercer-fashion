import axios from "axios"
import { HOST } from '../CONSTANT/host'
export const fetchPost = async (url, value) => {
    let response
    try {
        response = await axios.post(url, { ...value })
    } catch (error) {
        console.log(error)
        return (error)
    }

    return (response)
};

export const FetchGet = async (url) => {
    let response
    try {
        response = await axios.get(`${HOST}${url}`)
    } catch (error) {
        console.log(error)
        return (error)
    }

    return (response)
};
