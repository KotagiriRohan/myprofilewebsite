import bannerimg from "./stars.jpg";
import profileimg from "./profileimg.jpg";
import React from "react";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bannerimg})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-profileimg">
        <img src={profileimg} alt="" />
      </div>
      <h1>Computer Science Student</h1>
    </header>
  );
};

export default Banner;
