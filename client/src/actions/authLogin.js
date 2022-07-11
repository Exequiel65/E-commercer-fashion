import { types } from "../types/types";

export const startLogin = (data, token)=>{
    let parse = {
        id : data.user._id,
        email : data.user.email,
        avatar : data.user.avatar,
        name : data.user.name,
        token
    }
    return (dispatch)=>{
        sessionStorage.setItem('sessionEcommerce', JSON.stringify(parse))
        dispatch(login({
            user : parse
        }))
    }

}

export const startRegister = (data, token)=>{
    let parse = {
        id : data.user._id,
        email : data.user.email,
        avatar : data.user.avatar,
        name : data.user.name,
        token
    }
    return (dispatch)=>{
        sessionStorage.setItem('sessionEcommerce', JSON.stringify(parse))
        dispatch({
            type : types.authRegister,
            payload : parse
        })
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
