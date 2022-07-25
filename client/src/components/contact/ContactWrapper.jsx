import React from 'react';

const ContactWrapper = () => {
    return (
        <section className='flex-colummn section-contact-contain'>
            <div className='iframe-map-goole-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8945457995665!2d-64.1867856842483!3d-31.41703140342805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a283431cda1b%3A0x14657a81f201cf9a!2sC4054!5e0!3m2!1ses!2sar!4v1658766075044!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contact-container'>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i><a href='https://goo.gl/maps/3Bep3YA1F3LiMQmu6' target='_blank'>X5022 Córdoba</a></li>
                    <li><i className="far fa-clock"></i>
                        Horarios:
                        <ul className='hours-job'>
                            <li>Lunes a Viernes : 08:00hs a 18:00hs</li>
                            <li>Sabados : 08:00hs a 13:00hs</li>
                        </ul>
                    </li>
                    <li><i className="fas fa-phone"></i>+543513667788</li>
                    <li><i className="far fa-envelope"></i><a href='mailto:e-commercer@gmail.com'> e-commercer@gmail.com</a></li>
                </ul>
            </div>
        </section>
    );
}

export default ContactWrapper;
