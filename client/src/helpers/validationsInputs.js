class Validator {
    static validateEmail(email) {
        let menssage;
        let regExEmail =
            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let err1 = false;
        switch (true) {
            case !email.trim():
                menssage = "Ingrese un Email";
                err1 = true;
                break;
            case !regExEmail.test(email.trim()):
                menssage = "Inserte un email valido";
                err1 = true;
                break;
            default:
                err1 = false;
                menssage = "";
                break;
        }
        return {
            msg: menssage,
            error: err1,
        };
    };

    static validatePassword(password) {
        let menssage;
        let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
        let err2 = false;
        switch (true) {
            case !password.trim():
                menssage = "Ingrese una contraseña";
                err2 = true;
                break;
            case !regExPass.test(password.trim()):
                menssage =
                    "La contraseña debe tener: entre 8 o 12 caracteres, al menos una mayúscula, una minúscula y un número.";
                err2 = true;
                break;
            default:
                menssage = "";
                err2 = false;
                break;
        }

        return {
            msg: menssage,
            error: err2,
        };
    };

    static validateString(value){
        let message;
        let err = false
        let regExAlpha = /^[a-zA-Z\sñÑáÁéÉíÍóÓúÚü ]*$/;
        switch (true) {
            case !value.trim():
                message = "Ingrese un Nombre";
                err = true;
                break;
            case !regExAlpha.test(value.trim()):
                message =
                    "Ingrese un nombre valido";
                err = true;
                break;
            default:
                message = "";
                err = false;
                break;
        }
        return {
            msg: message,
            error: err,
        };
    }
}



export default Validator;