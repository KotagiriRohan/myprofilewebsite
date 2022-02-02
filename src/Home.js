import { Link } from "react-router-dom";
import Banner from "./Banner";
import Carousel from "./Carousel";
import ProjectCards from "./ProjectCards";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProjectCards num={3} />
      <div className="project-button">
        <Link to="/projects">
          <button>Show More</button>
        </Link>
      </div>
      <div></div>
      <Skills />
      <Carousel />
    </div>
  );
};

export default Home;
