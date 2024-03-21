import React from "react";
import "./index.css";

export default function CertificationCard(props) {
  return (
    <div className="c-wrapper">
      <div className="title">{props.title}</div>
      <p className="description">
          {props.description}
      </p>
      <a href={props.link}>
        <button className="cert-btn">View</button>
      </a>
    </div>
  );
}
