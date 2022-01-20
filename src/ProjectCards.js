import polygonimg from "./polygon.jpg";
const ProjectCards = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={polygonimg} alt="" />
          <div className="card-title">XYZ</div>
          <div className="card-desc">ehwfhijweijfwejfowjfwiojefijjfjfkdf</div>
        </div>
        <div className="card">
          <img src={polygonimg} alt="" />
          <div className="card-title">XYZ</div>
          <div className="card-desc">ehwfhijweijfwejfowjfwiojefijjfjfkdf</div>
        </div>
        <div className="card">
          <img src={polygonimg} alt="" />
          <div className="card-title">XYZ</div>
          <div className="card-desc">ehwfhijweijfwejfowjfwiojefijjfjfkdf</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
