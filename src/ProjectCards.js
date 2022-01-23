import { SiPython, SiReact } from "react-icons/si";
import useFetch from "./useFetch";

const ProjectCards = ({ num }) => {
  const { data, isPending, error } = useFetch(num);

  return (
    <div className="projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className="cards">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data &&
          data.length > 0 &&
          data.map((project) => (
            <div className="card" key={project.id}>
              <img src={process.env.PUBLIC_URL + project.imagepath} alt="" />
              <div className="card-title">{project.title}</div>
              <div className="card-desc">{project.description}</div>
              <div className="card-projectlang">
                {project.language === "Python" && <SiPython />}
                {project.language === "React JS" && <SiReact />}
                <p>{project.language}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectCards;
