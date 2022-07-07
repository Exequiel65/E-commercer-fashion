import React from 'react';
import '../styles/login.css'
const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <main className='login-main'>
            <section className='aside-login'>
                <div className='titles-login'>
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit</p>
                    <a href="/">Read More</a>
                </div>
                <img className='svg-login'src="/svg/Group.svg" alt="" />
            </section>
            <section className='form-login-section'>
                <div className='form-container'>
                    <h3>Hello Again!</h3>
                    <h6>Welcome Back</h6>
                    <form className='form-contain' onSubmit={handleSubmit}>
                        <div className='input-container'>
                            <label htmlFor="email"><img src="/svg/email.svg" alt="" /></label>
                            <input type="text" id='email' autoComplete='off' name='email' placeholder='Email'/>
                            <span className='text-danger'>Mensaje de error largo donde este se ve los errorres de los inputs</span>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="pass"><img src="/svg/pass.svg" alt="" /></label>
                            <input type="password" id='pass' autoComplete='off' name='password' placeholder='Contraseña' />
                            <span className='text-danger'>Mensaje de error largo donde este se ve los errorres de los inputs</span>
                        </div>
                        <button type="submit">Login</button>
                        <a href="/" className='forgot-password'>Recuperar Contraseña</a>
                    </form>
                    <div className='auth-links'>
                        <div className='svg-contain'>
                            <div className='svg-container'>
                                <img src="/svg/google.svg" alt="" />
                            </div>
                            <div className='svg-container'>
                                <img src="/svg/twiter.svg" alt="" />
                            </div>
                            <div className='svg-container'>
                                <img src="/svg/linkedin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img className='img-circle-820' id='first-circle' src="/svg/Group.svg" alt="" />
            <img className='img-circle-820' id='second-circle' src="/svg/Group.svg" alt="" />
        </main>
    );
}

export default Login;
