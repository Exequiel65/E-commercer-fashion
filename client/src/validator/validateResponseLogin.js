import { HOST } from "../CONSTANT/host";
import fetchPost from "../helpers/fetchPost";


const validateResponse = async (setErrors, FormValue, Errors,url )=>{
    let msgs = {
        ...Errors
    }
    let response = await fetchPost(`${HOST}${url}`, FormValue)
    if (response.request.status === 400) {
        if (response.response.data.errors) {
            let errors = response.response.data.errors
            errors.map(err =>{
                if (err.param === 'email') {
                    
                    switch (true) {
                        case err.msg === 'Email is required':
                            msgs.email = 'Ingrese un Email'
                            break;
                        case err.msg === 'Wrong email':
                                msgs.email =  "Email Invalido"
                            break;
                    
                        default:
                            
                            break;
                    }   
                } 
                if (err.param === 'password') {
                    switch (true) {
                        case err.msg === 'Password is required':
                            msgs.password = "Ingrese una contraseña"
                            break;
                        case err.msg === 'Password invalid':
                            msgs.password = "Ingrese una contraseña valida"
                            break;
                        case err.msg === 'min 8 and max 12 characters':
                            msgs.password = "Ingrese una contraseña con 8 a 12 caracteres"
                            break;
                        default:
                            break;
                    }   
                } 
                if (err.param === 'name') {
                    switch (true) {
                        case err.msg === 'Name is required':
                            msgs.name = "Ingrese un Nombre"
                            
                            break;
                        case err.msg === 'Name is invalid':
                            msgs.name = "Ingrese un Nombre valido"
                            break;  
                        default:
                            break;
                    }   
                } 
            })

            setErrors(msgs)
        }
        if (response.response.data.msg) {
            if (response.response.data.msg === 'email already registered') {
                setErrors({
                    email : 'Email ya registrado',
                    password : ''
                })
            } else{
                setErrors({
                    email : "",
                    password : 'Email o contraseña incorrecta'
                })
            }
        }
    }
    if (response.request.status === 404) {
        if (response.response.data.msg) {
            setErrors({
                email : "",
                password : 'Email o contraseña incorrecta'
            })
        }
    }

    if (response.status === 200) {
        return response
    }
    if (response.status === 201) {
        return response
    }
  }

export default validateResponse;
