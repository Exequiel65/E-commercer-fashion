import fetchPost from "../helpers/fetchPost";

const validateResponse = async (setErrors, FormValue, Errors )=>{
    let msgs = {
        ...Errors
    }
    let response = await fetchPost('http://localhost:3030/auth/login', FormValue)
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
            })

            setErrors(msgs)
        }

        if (response.response.data.msg) {
            setErrors({
                email : "",
                password : 'Email o contraseña incorrecta'
            })
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
  }

export default validateResponse;
