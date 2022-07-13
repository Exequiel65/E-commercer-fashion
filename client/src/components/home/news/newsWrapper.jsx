import React from 'react';

import New from './new';
import '../../../styles/sectionNews.css'
const NewsWrapper = () => {
    return (
        <section className='news-section flex-row'>
                <div className='news-container flex-row'>
                    <New title='Bestseller' />
                    <New title='New Arrival' />
                    <New title='Featured' />

                </div>
            </section>
    );
}

export default NewsWrapper;
