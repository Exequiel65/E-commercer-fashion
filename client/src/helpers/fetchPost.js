import axios from "axios"

const fetchPost = async (url, value) =>{
    let response
    try {
        response = await axios.post(url, {...value})
        console.log(response)
    } catch (error) {
        console.log(error)
        return(error)
    }

    return(response)
  }
export default fetchPost;
