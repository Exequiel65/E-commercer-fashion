import React from 'react';

const Founders = ({Founder1, Founder2}) => {
    console.log(Founder1)
    return (
        <section className='flex-colummn section-about'>
                <h2>Our Founders</h2>
                <article data-aos="fade-rigth" className='flex-colummn article-about article-founder'>
                    <div className='image-container-about image-founder'>
                        <img src={`/img/${Founder1.image}`} alt="" />
                    </div>
                    <div className='description-container'>
                        <h4 className='name-founder'>{Founder1.name}</h4>
                        <p className='description-founder'>{Founder1.description}</p>
                    </div>
                </article>
                <article data-aos="fade-left" data-aos-delay="500" className='flex-colummn article-about article-founder'>
                    <div className='image-container-about image-founder'>
                        <img src={`/img/${Founder2.image}`} alt="" />
                    </div>
                    <div className='description-container'>
                        <h4 className='name-founder'>{Founder2.name}</h4>
                        <p className='description-founder'>
                            {Founder2.description}
                        </p>
                    </div>
                </article>
        </section>
    );
}

export default Founders;
