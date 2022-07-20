import React from 'react';
import { useEffect } from 'react';
import SectionApart from '../components/auth/sectionApart';
import SectionForm from '../components/auth/sectionForm';
import { titlePage } from '../helpers/changeTitlePage';
import '../styles/login.css'
const Login = () => {
    
    useEffect(() => {
        titlePage('Login')
    }, []);
    return (
        <main className='auth-main'>
            <SectionApart />
            <SectionForm isLogin={true}/>
            <img className='img-circle-820' id='first-circle' src="/svg/Group.svg" alt="" />
            <img className='img-circle-820' id='second-circle' src="/svg/Group.svg" alt="" />
        </main>
    );
}

export default Login;
