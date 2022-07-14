import React from 'react';
import '../../../styles/carrousel.css'
import Slider from "react-slick";
import TitleProductsHome from '../titleProductsHome';
import ItemCarousel from './itemCarousel';

const Carrousel = ({products}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows : true,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                infinite: true,
              }
            },
            
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      };
    return (
        <section className='carrousel-container'>
            <TitleProductsHome title='Monthly Deals' />
            <div className='carrousel-contain'>
                <div className='box-contain'>
                    <Slider className='carousel' {...settings}>
                        {products && products.map((product, i)=>(
                            product && <ItemCarousel key={i + product._id} product={product} />
                        ))}                     
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Carrousel;
