import React, { useEffect } from "react";
import { useState } from "react";
import Validation from "../../helpers/validations";
import ValidateResponseLogin from "../../validator/validateResponseLogin";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/authLogin'

const Form = ({setLoad}) => {
  const dispatch = useDispatch()
  const [FormValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [Errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [err, seterr] = useState();
  const handleChange = (e) => {
    seterr(null)
    setFormValue({
      ...FormValue,
      [e.target.name]: e.target.value,
    });
    let atribute = e.target.name
    Validation(FormValue, setErrors, Errors, atribute);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valuesObjErr = Object.values(Errors)
    let valuesObj = Object.values(FormValue)
    let existError = valuesObjErr.find(value => value.length >0)
    setLoad(true)
    if (!existError && !valuesObj.includes('')) {
      let resolve = await ValidateResponseLogin(setErrors, FormValue, Errors, '/auth/login', setLoad);
      if (resolve.status === 200) {
        setLoad(false)
        dispatch(startLogin(resolve.data, resolve.data.token))
      }
    }else{
      setLoad(false)
      seterr('Completa todos los campos')
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
        <span className="text-danger span-general" >{err}</span>
      </div>
      <button type="submit">Login</button>
      <div className="forgot-password-container">
        <Link to="/" className="forgot-password">
          Recuperar Contraseña
        </Link>
        <Link to="/register" className="forgot-password">
          ¿No tenés cuenta?, Registrate.
        </Link>
        <Link className="nav-home" to="/">Ir a pagina Principal</Link>
      </div>
    </form>
  );
};

export default Form;
