import React from 'react';
import SectionApart from '../components/login/sectionApart';
import SectionForm from '../components/login/sectionForm';
import '../styles/login.css'
const Login = () => {
    return (
        <main className='login-main'>
            <SectionApart />
            <SectionForm />
            <img className='img-circle-820' id='first-circle' src="/svg/Group.svg" alt="" />
            <img className='img-circle-820' id='second-circle' src="/svg/Group.svg" alt="" />
        </main>
    );
}

export default Login;
