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
      <div className="banner-content">
        <h1>Computer Science Student</h1>
        <p className="banner-collegename">Manipal University Jaipur</p>
        <div className="banner-icons">
          <div className="banner-icon">
            <a href="/">
              <p>LinkedIn</p>
              <BsLinkedin />
            </a>
          </div>
          <div className="banner-icon">
            <a href="https://github.com/KotagiriRohan">
              <p>Github</p>
              <BsGithub />
            </a>
          </div>
          <div className="banner-icon">
            <a href="/">
              <p>CodeChef</p>
              <SiCodechef />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-gradient" />
    </header>
  );
};

export default Banner;
