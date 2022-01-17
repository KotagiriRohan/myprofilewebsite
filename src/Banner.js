import bannerimg from "./stars.jpg";
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
    ></header>
  );
};

export default Banner;
