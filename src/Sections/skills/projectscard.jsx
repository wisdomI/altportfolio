import React from "react";
import "./projectcard.css";

export default function ProjectCard(props) {
  return (
    <div className="cards">
      <div className="p-wrapper">
        <h3 className="title">{props.title}</h3>
        <div className="card-images">
          <img src={props.image}
          height={200}
          width={400}
          alt="" 
          className="project-img"
          />
          </div>
        <p className="text">{props.description}</p>

        <a href={props.link} target="blank">
          <button className="button">view</button>
        </a>
      </div>
    </div>
  );
}
