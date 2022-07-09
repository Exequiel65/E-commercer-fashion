import Validator from "./validationsInputs";

const validateValue = (values, setErrors, Errors, atribute) => {
    let error = {
      name: {
        error: false,
        msg: "",
      },
      email: {
        error: false,
        msg: "",
      },
      password: {
        error: false,
        msg: "",
      },
    };

    if (atribute === 'email') {
      let email = Validator.validateEmail(values.email);
      error.email = email;
      setErrors({
        ...Errors,
        email: error.email.msg,
      });
    }

    if (atribute === 'password') {
      let password = Validator.validatePassword(values.password)
      error.password = password
      setErrors({
        ...Errors,
        password: error.password.msg,
      });
    }

    if (atribute === 'name') {
      let name = Validator.validateString(values.name);
      error.name = name;
      setErrors({
        ...Errors,
        name : error.name.msg
      });
    }

  };

export default validateValue;