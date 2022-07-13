import React from 'react';
import '../../styles/carrousel.css'
import Slider from "react-slick";
import Carousel from 'nuka-carousel'

const Carrousel = () => {
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
            <div className='title-carrousel'>
                <div className='line-spacing'>
                    <div></div>
                </div>
                <h5>Monthly Deals</h5>
            </div>
            <div className='carrousel-contain'>
                <div className='box-contain'>
                    <Slider className='carousel' {...settings}>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='photo-contain'>
                                <img src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product" alt="" />
                            </div>
                            <div className='data-contain'>
                                <div className='data'>
                                    <p className='name-product'>Name</p>
                                    <p className='discount'>Discount</p>
                                    <p className='price-carousel'>$price</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Carrousel;
