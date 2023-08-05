import React from "react";
import profileImg from "../../Resources/Images/profile-img.png";
import "./About.css";
import useServices from "../../hooks/useServices";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="profile-img">
          <img src={profileImg} alt="Image-Samiul" />
        </div>
        <div className="description">
          <h3 className="text-success">Samiul Islam Talukdar</h3>
          <h5 className="text-success">BSc in CSE</h5>
          <p className="goal-description">
            I am passionate about web development. My current goal is to work
            hard and learn professional-level React JS to build my career in Web
            Development.I am following the Programming Hero Course to learn web
            development and our tutor Jhankar Mahbub vai is guiding me the right
            way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
