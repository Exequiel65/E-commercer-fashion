import React from "react";

const FirstVist = ({title, descr}) => {
  return (
    <section className="first-vist">
      <div className="title-vist animate__animated animate__fadeInDown animate__delay-1s">
        <h3>{title}</h3>
        <p>{descr}</p>
      </div>
      <img className="line-home" src="/svg/line-home.svg" alt="" />
    </section>
  );
};

export default FirstVist;
