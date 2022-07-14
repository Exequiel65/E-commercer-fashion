import React from 'react';

import New from './new';
import '../../../styles/sectionNews.css'
import Loader from '../../Load/Loader';
const NewsWrapper = ({newArrival, featured, bestSellers}) => {
    return (
        <section className='news-section flex-row'>
            { newArrival || featured || bestSellers ? 
                <div className='news-container flex-row'>

                    {bestSellers && <New title='Bestseller' products={bestSellers}/>}
                    { newArrival && <New title='New Arrival' products={newArrival} />}
                    { featured && <New title='Featured' products={featured} />}

                </div>
             : <Loader style={{position : 'relative', backgroundColor : '#F2F3F5', zIndex: 10, height:'50vh'}}/>}
            </section>
    );
}

export default NewsWrapper;
