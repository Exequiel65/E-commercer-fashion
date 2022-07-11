import { types } from "../types/types";

export const startLogin = (data, token)=>{
    let parse = {
        id : data.user._id,
        email : data.user.email,
        token
    }
    return (dispatch)=>{
        sessionStorage.setItem('sessionEcommerce', JSON.stringify(parse))
        dispatch(login({
            user : parse
        }))
    }

}

export const logout= ()=>{
    return(dispatch)=>{
        localStorage.removeItem('sessionEcommerce')
        dispatch({
            type : types.authLogout
        })
    }
}

const login = (user)=>({
    type : types.authLogin,
    payload : user
})
