import React from 'react';

const AboutWrapper = () => {
    
    return (
        <>
            <section className='flex-colummn section-about '>
                <article data-aos="fade-left" className='flex-colummn article-about'>
                    <div className='image-container-about'>
                        <img src="/img/imageAbout1.png" alt="" />
                    </div>
                    <div className='description-container'>
                        <span>Company Mission</span>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id, animi excepturi ipsum enim aliquid accusamus numquam deserunt ab quae veniam debitis! Vero dicta cum enim quidem nobis nemo quia?</p>
                    </div>
                </article>
                <article data-aos="fade-left" className='flex-colummn article-about'>
                    <div className='image-container-about' id='image-2'>
                        <img src="/img/imageAbout2.png" alt="" />
                    </div>
                    <div className='description-container' id='description-2'>
                        <span>Company Culture </span>
                        <ul>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className='flex-colummn section-company-vision'>
                <div className='company-vision animate__animated animate__fadeInDown animate__delay-1s'>
                    <span>Company vision </span>
                    <p>We aim to be a leading contractor in Argentina by focusing on the timely implementation of our projects and meeting the expectations and requirements of our customers at the highest possible level.</p>
                </div>
            </section>

            <section className='flex-colummn section-about'>
                <h2>Our Founders</h2>
                <article data-aos="fade-left" className='flex-colummn article-about article-founder'>
                    <div className='image-container-about image-founder'>
                        <img src="/img/fouder1.png" alt="" />
                    </div>
                    <div className='description-container'>
                        <h4 className='name-founder'>Mr. Ahmed Ismail.</h4>
                        <p className='description-founder'>Bachelor’s degree in Mechanical Engineering from Ain Shams University, Cairo, Egypt, 2002. With 20 years of experience in the construction field for the main contractor of the below-listed construction projects before founding Projex-Tec.</p>
                    </div>
                </article>
                <article data-aos="fade-left" className='flex-colummn article-about article-founder'>
                    <div className='image-container-about image-founder'>
                        <img src="/img/fouder2.png" alt="" />
                    </div>
                    <div className='description-container'>
                        <h4 className='name-founder'>Mr. Shaaban Nada</h4>
                        <p className='description-founder'>Bachelor’s degree in Mechanical Engineering from Cairo University, Egypt, 2004.
                            - MCIPS® Member of the Chartered Institute of Procurement & Supply (CIPS – UK) 
                            - CPSM® (Certified Supply Management Professional) from 
                            Institute for Supply Management (ISM-USA). 
                            - CPP® (Certified Purchasing Professional) from the 
                            American Purchasing Society (APS-USA)
                            With 17 years of experience in Engineering & Procurement for the main contractor of the below-listed construction projects before founding Projex-Tec.
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default AboutWrapper;
