import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import ValidateResponseLogin from "../../validator/validateResponseLogin";

const Form = () => {
  const [FormValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [Errors, setErrors] = useState({
    email : "",
    password : "",
  });
  const handleChange = (e)=>{
    setFormValue({
        ...FormValue,
        [e.target.name] : e.target.value 
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let resolve = await ValidateResponseLogin(setErrors, FormValue, Errors)
  };

  useEffect(() => {
  }, [Errors]);
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
        <span className="text-danger">
          {Errors.email}
        </span>
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
        <span className="text-danger">
          {Errors.password}
        </span>
      </div>
      <button type="submit">Login</button>
      <a href="/" className="forgot-password">
        Recuperar Contraseña
      </a>
    </form>
  );
};

export default Form;
