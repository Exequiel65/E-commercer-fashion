import React from "react";
import AuthServices from "./authServices";
import Form from "./form";

const SectionForm = () => {
  return (
    <section className="form-login-section">
      <div className="form-container">
        <h3>Hello Again!</h3>
        <h6>Welcome Back</h6>
        <Form />

        
        <div className="auth-links">
          <AuthServices />
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
