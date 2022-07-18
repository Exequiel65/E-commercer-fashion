import React from 'react';
import AOS from 'aos';

const AboutWrapper = () => {
    
    return (
        <section className='section-about flex-colummn'>
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
    );
}

export default AboutWrapper;
