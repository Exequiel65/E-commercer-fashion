import React, { useEffect } from 'react';
import { useState } from 'react';
import ContactWrapper from '../components/contact/ContactWrapper';
import FirstVist from '../components/firstVist';
import { FetchGet } from '../helpers/AxiosMethod';
import '../styles/contact.css'
const Contact = () => {
    const [Contact, setContact] = useState(null);
    const apiGet = async ()=>{
        let contact = await FetchGet('/contact')
        setContact(contact.data.contact[0])
    }
    useEffect(() => {
        apiGet()
    }, []);
    return (
        <main className='main-contact'>
            <FirstVist title='Contact' descr='Lorem, ipsum dolor sit amet' />
            {Contact && <ContactWrapper contact={Contact} />}
            
        </main>
    );
}

export default Contact;
