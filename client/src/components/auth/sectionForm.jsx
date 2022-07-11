import React from "react";
import { useState } from "react";
import Loader from "../Load/Loader";
import AuthServices from "./authServices";
import FormLogin from "./formLogin";
import FormRegister from "./formRegister";

const SectionForm = ({isLogin, isForget}) => {

  let title = isLogin ? 'Hello Again!' : isForget ? 'Forgot Password' : 'Hello!';
  let subtitle = isLogin ? 'Welcome Back' : isForget ? 'Welcome Back' : 'Sign Up to Get Started';
  const [Load, setLoad] = useState(false);


  return (
    <section className="animate__animated animate__fadeIn form-auth-section">
      <div className="form-container">
        <h3 >{title}</h3>
        <h6 >{subtitle}</h6>
        {isLogin && <FormLogin setLoad={setLoad} />}
        {!isLogin && <FormRegister setLoad={setLoad}  />}

        {Load && <Loader />}
        <div className="auth-links">
          <AuthServices />
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
