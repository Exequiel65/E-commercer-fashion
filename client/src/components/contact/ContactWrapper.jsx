import React from 'react';

const ContactWrapper = ({contact}) => {
    return (
        <section className='flex-colummn section-contact-contain'>
            <div className='iframe-map-goole-container'>
                <iframe src={contact.iframeMaps} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contact-container'>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i><a href={contact.addressLinkMaps[0]} target='_blank'>{contact.address[0]}</a></li>
                    <li><i className="far fa-clock"></i>
                        Horarios:
                        <ul className='hours-job'>
                            {contact.hours.map((d, i)=>(
                                <li key={i + d.days}>{`${d.days} : ${d.hour}`}</li>
                            ))}
                            
                        </ul>
                    </li>
                    <li><i className="fas fa-phone"></i><a href={`tel:${contact.phone[0]}`}>+{contact.phone[0]}</a></li>
                    <li><i className="far fa-envelope"></i><a href={`mailto:${contact.email[0]}`}>{contact.email[0]}</a></li>
                </ul>
            </div>
        </section>
    );
}

export default ContactWrapper;
