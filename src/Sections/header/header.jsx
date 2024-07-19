import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img
          src={process.env.PUBLIC_URL + "/WizLogopng.png"}
          alt="logo"
          width={150}
          height={30}
        />
      </div>

      {/* <div className="theme-switcher">
        <div className="selector"></div>
      </div> */}
    </div>
  );
}
