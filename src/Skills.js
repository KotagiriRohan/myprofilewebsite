import { SiTensorflow, SiReact, SiOpencv, SiPython } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <div className="skill-icon skill-orange">
          <SiTensorflow />
        </div>
        <div className="skill-title">Machine Learning</div>
      </div>
      <div className="skill">
        <div className="skill-icon skill-orange">
          <GiBrain />
        </div>
        <div className="skill-title">Deep Learning</div>
      </div>
      <div className="skill">
        <div className="skill-icon skill-blue">
          <SiReact />
        </div>
        <div className="skill-title">React JS</div>
      </div>
      <div className="skill">
        <div className="skill-icon skill-blue">
          <SiPython />
        </div>
        <div className="skill-title">Python</div>
      </div>
      <div className="skill">
        <div className="skill-icon skill-green">
          <SiOpencv />
        </div>
        <div className="skill-title">Image Processing</div>
      </div>
    </div>
  );
};

export default Skills;
