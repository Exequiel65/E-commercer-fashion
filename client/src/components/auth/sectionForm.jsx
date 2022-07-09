import React from "react";
import AuthServices from "./authServices";
import FormLogin from "./formLogin";
import FormRegister from "./formRegister";

const SectionForm = ({isLogin, isForget}) => {

  let title = isLogin ? 'Hello Again!' : isForget ? 'Forgot Password' : 'Hello!';
  let subtitle = isLogin ? 'Welcome Back' : isForget ? 'Welcome Back' : 'Sign Up to Get Started';


  return (
    <section className="form-auth-section">
      <div className="form-container">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
        {isLogin && <FormLogin />}
        {!isLogin && <FormRegister />}

        
        <div className="auth-links">
          <AuthServices />
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
