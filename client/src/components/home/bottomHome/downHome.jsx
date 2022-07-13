import React from "react";
import InstagramPhoto from "./instagramPhoto";
import ReadAndImage from "./readAndImage";
import '../../../styles/downHome.css'
const DownHome = () => {
  return (
    <section className="downHome">
      <ReadAndImage />

      <InstagramPhoto />
    </section>
  );
};

export default DownHome;
