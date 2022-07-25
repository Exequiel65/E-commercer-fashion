import React from 'react';
import ContactWrapper from '../components/contact/ContactWrapper';
import FirstVist from '../components/firstVist';
import '../styles/contact.css'
const Contact = () => {
    return (
        <main className='main-contact'>
            <FirstVist title='Contact' descr='Lorem, ipsum dolor sit amet' />
            <ContactWrapper />
        </main>
    );
}

export default Contact;
