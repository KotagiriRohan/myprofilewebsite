// import profileimg from "./profileimg.jpg";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "./images/polygon.jpg"
        })`,
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
            <a href="https://www.linkedin.com/in/rohankotagiri">
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
            <a href="https://www.kaggle.com/rohankotagiri">
              <p>Kaggle</p>
              <FaKaggle />
            </a>
          </div>
        </div>
        <div className="downloadbtn">
          <a href={`${process.env.PUBLIC_URL + "./rohanresume.pdf"}`}>
            <FaFileDownload /> Resume Download{" "}
          </a>
        </div>
      </div>
      <div className="bottom-gradient" />
    </header>
  );
};

export default Banner;
