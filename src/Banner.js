import bannerimg from "./polygon.jpg";
// import profileimg from "./profileimg.jpg";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
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
      {/* <div className="banner-profileimg">
        <img src={profileimg} alt="" />
      </div> */}
      <h1>Computer Science Student</h1>
      <p className="banner-collegename">Manipal University Jaipur</p>
      <div className="banner-icons">
        <a href="/">
          <BsLinkedin />
        </a>
        <a href="/">
          <BsGithub />
        </a>
        <a href="/">
          <SiCodechef />
        </a>
      </div>
    </header>
  );
};

export default Banner;
