import React from "react";

const CompanyMission = ({titleMision, mission, culture}) => {
  return (
    <section className="flex-colummn section-about ">
      <article data-aos="fade-left" className="flex-colummn article-about">
        <div className="image-container-about">
          <img src="/img/imageAbout1.png" alt="" />
        </div>
        <div className="description-container">
          <span>Company Mission</span>
          <h4>{titleMision}</h4>
          <p>
            {mission}
          </p>
        </div>
      </article>
      <article data-aos="fade-rigth" data-aos-delay="500" className="flex-colummn article-about">
        <div className="image-container-about" id="image-2">
          <img src="/img/imageAbout2.png" alt="" />
        </div>
        <div className="description-container" id="description-2">
          <span>Company Culture</span>
          <ul>
            { culture.map( (cul , i) =>(
              <li key={i}>{cul}</li>
            ) )}
           
          </ul>
        </div>
      </article>
    </section>
  );
};

export default CompanyMission;
