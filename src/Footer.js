import { SiGmail } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h1>Contact Me</h1>
        <p>
          <MdLocationPin /> Hyderabad,India
        </p>
        <div className="footer-links">
          <a href="mailto:rohankotagiri10@gmail.com">
            <SiGmail />
          </a>
          <a href="https://instagram.com/kotagirirohan">
            <BsInstagram />
          </a>
          <a href="https://www.kaggle.com/rohankotagiri">
            <FaKaggle />
          </a>
          <a href="https://github.com/KotagiriRohan">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/rohankotagiri">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
