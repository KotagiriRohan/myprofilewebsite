import netflix from "./netflix.jpg";
import asl from "./asl.png";
import mrs from "./MRS.jpg";
import { SiPython, SiReact } from "react-icons/si";
const ProjectCards = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={asl} alt="" />
          <div className="card-title">ASL Detection</div>
          <div className="card-desc">
            Image Detection project to classify different ASL alphabets using
            TensorFlow and Mediapipe API.
          </div>
          <div className="card-projectlang">
            <SiPython />
            <p>Python</p>
          </div>
        </div>
        <div className="card">
          <img src={mrs} alt="" />
          <div className="card-title">Recommendation System</div>
          <div className="card-desc">
            Movie Recommendations using Demographic Filtering and Content Based
            Filtering in Python.
          </div>
          <div className="card-projectlang">
            <SiPython />
            <p>Python</p>
          </div>
        </div>
        <div className="card">
          <img src={netflix} alt="" />
          <div className="card-title">Netflix Clone</div>
          <div className="card-desc">
            Single dynamic web page using React JS and TMDB API.
          </div>
          <div className="card-projectlang">
            <SiReact />
            <p>React JS</p>
          </div>
        </div>
      </div>
      <div className="project-button">
        <a href="/">
          <button>Show More</button>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCards;
