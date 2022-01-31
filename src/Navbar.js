import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ scroll }) => {
  const [show, handleShow] = useState(false);
  const [dropdown, handleDropdown] = useState(false);

  const scrooly = () => {
    if (window.scrollY >= 100) {
      handleShow(true);
    } else handleShow(false);
  };
  const resizes = () => {
    if (window.innerWidth <= 1000) {
      handleDropdown(true);
    } else handleDropdown(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrooly();
    });
    window.addEventListener("resize", () => {
      resizes();
    });
    return () => {
      window.removeEventListener("scroll", scrooly);
      window.removeEventListener("resize", resizes);
    };
  }, []);

  return (
    <div
      className={`nav-bar ${scroll && show && "nav-bar__black"} ${
        !scroll && "nav-bar__black"
      }`}
    >
      <div className="nav-bar-padding">
        <div className="nav-bar-name">Rohan Kotagiri</div>
        {dropdown && (
          <div className="dropdown">
            <div className="dropbtn">
              <FiMenu />
            </div>
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <a href="/">About</a>
              <Link to="/projects">Projects</Link>
              <a href="/">Drawings</a>
            </div>
          </div>
        )}
        {!dropdown && (
          <div className="nav-bar-links">
            <Link to="/">Home</Link>
            <a href="/">About</a>
            <Link to="/projects">Projects</Link>
            <a href="/">Drawings</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
