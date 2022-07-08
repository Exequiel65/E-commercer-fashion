import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ValidateResponseLogin from "../../validator/validateResponseLogin";

const Form = () => {
  const [FormValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [Errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormValue({
      ...FormValue,
      [e.target.name]: e.target.value,
    });

    validateValue(FormValue, setErrors, Errors);
  };

  const validateEmail = (email) => {
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

  const validatePassword = (password) => {
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

  const validateValue = (values, setErrors, Errors) => {
    let error = {
      email: {
        error: false,
        msg: "",
      },
      password: {
        error: false,
        msg: "",
      },
    };

    let email = validateEmail(values.email);
    let password = validatePassword(values.password)
    error.email = email;
    error.password = password

    setErrors({
      ...Errors,
      email: error.email.msg,
      password : error.password.msg
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valuesObj = Object.values(Errors)
    let existError = valuesObj.find(value => value.length >0)
    if (!existError) {
      let resolve = await ValidateResponseLogin(setErrors, FormValue, Errors);
      console.log(resolve)
    }
  };

  useEffect(() => {}, [Errors]);
  return (
    <form className="form-contain" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="email">
          <img src="/svg/email.svg" alt="" />
        </label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <span className="text-danger">{Errors.email}</span>
      </div>
      <div className="input-container">
        <label htmlFor="pass">
          <img src="/svg/pass.svg" alt="" />
        </label>
        <input
          type="password"
          id="pass"
          autoComplete="off"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <span className="text-danger">{Errors.password}</span>
      </div>
      <button type="submit">Login</button>
      <a href="/" className="forgot-password">
        Recuperar Contraseña
      </a>
    </form>
  );
};

export default Form;
