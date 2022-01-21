import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav-bar ${show && "nav-bar__black"}`}>
      <div className="nav-bar-padding">
        <div className="nav-bar-name">Rohan Kotagiri</div>
        <div className="nav-bar-links">
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/">Drawings</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
