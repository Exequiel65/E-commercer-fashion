import axios from "axios"

const fetchPost = async (url, value) =>{
    let response
    try {
        response = await axios.post(url, {...value})
    } catch (error) {
        console.log(error)
        return(error)
    }

    return(response)
  }
export default fetchPost;
