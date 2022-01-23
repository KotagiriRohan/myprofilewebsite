import Banner from "./Banner";
import ProjectCards from "./ProjectCards";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProjectCards num={3} />
      <div className="project-button">
        <a href="/">
          <button>Show More</button>
        </a>
      </div>
      <div></div>
      <Skills />
    </div>
  );
};

export default Home;
