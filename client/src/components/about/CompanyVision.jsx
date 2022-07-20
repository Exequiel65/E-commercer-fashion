import React from "react";

const CompanyVision = ({vision}) => {
  return (
    <section className="flex-colummn section-company-vision">
      <div data-aos="fade-up" data-aos-delay="500"  className="company-vision">
        <span>Company vision </span>
        <p>
          {vision}
        </p>
      </div>
    </section>
  );
};

export default CompanyVision;
