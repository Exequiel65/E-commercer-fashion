import React from 'react';

const Founders = () => {
    return (
        <section className='flex-colummn section-about'>
                <h2>Our Founders</h2>
                <article data-aos="fade-rigth" className='flex-colummn article-about article-founder'>
                    <div className='image-container-about image-founder'>
                        <img src="/img/fouder1.png" alt="" />
                    </div>
                    <div className='description-container'>
                        <h4 className='name-founder'>Mr. Ahmed Ismail.</h4>
                        <p className='description-founder'>Bachelor’s degree in Mechanical Engineering from Ain Shams University, Cairo, Egypt, 2002. With 20 years of experience in the construction field for the main contractor of the below-listed construction projects before founding Projex-Tec.</p>
                    </div>
                </article>
                <article data-aos="fade-left" data-aos-delay="500" className='flex-colummn article-about article-founder'>
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
    );
}

export default Founders;
