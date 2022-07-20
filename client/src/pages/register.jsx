import React from 'react';
import SectionApart from '../components/auth/sectionApart';
import SectionForm from '../components/auth/sectionForm';
import '../styles/login.css'
import { useEffect } from 'react';
import { titlePage } from '../helpers/changeTitlePage';
const Register = () => {
    useEffect(() => {
        titlePage('Registrarse')
    }, []);
    return (
        <main className='auth-main'>
            <SectionApart />
            <SectionForm isLogin={false} />
            <img className='img-circle-820' id='first-circle' src="/svg/Group.svg" alt="" />
            <img className='img-circle-820' id='second-circle' src="/svg/Group.svg" alt="" />
        </main>
    );
}

export default Register;
