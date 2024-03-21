import React, { useState } from "react";
import "./skills.css";
import Card from "./Skillcard";
import { data } from "./skilldata";
import { otherdata } from "./otherskills";
import OtherSkills from "./otherskillscard";
import { projects } from "./projectdata";
import ProjectCard from "./projectscard";

export default function Skills() {
  const renderCard = data.map((e) => {
    return <Card key={e.id} {...e} />;
  });

  const renderOtherCard = otherdata.map((e) => {
    return <OtherSkills key={e.id} {...e} />;
  });
  const projectCard = projects.map((e) => {
    return <ProjectCard key={e.id} {...e} />;
  });

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="main-skills-wrapper" id="skills">
      <div className="line"> </div>
      <div className="skills-wrapper">
        <div className="content-wrapper">
          <h1 className="skills-section-header">Skills</h1>
          <div className="skills-mini-nav">
            <button
              onClick={() => toggleTab(1)}
              className={toggleState === 1 ? "active-nav" : "default"}
            >
              Skill set
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={toggleState === 2 ? "active-nav" : "default"}
            >
              Projects
            </button>
          </div>
          <div
            className={toggleState === 1 ? "active-tab" : "card-render-wrapper"}
          >
            <div className="active-tab">
            {renderCard}
            </div>
            <div className="other-skills">
              <h2>Other Skills</h2>
              <div className="active-tab">{renderOtherCard}</div>
            </div>
          </div>
        </div>
        <div className={toggleState === 2 ? "project-active-tab" : "card-render-wrapper"}>
          {projectCard}
        </div>
      </div>
    </div>
  );
}
