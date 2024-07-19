import React from "react";
import "./index.css";
import CertificationCard from "./certificationcard";
import { certifications } from "./certificatedata";

export default function Certification() {
  const renderCertificate = certifications.map((e) => {
    return <CertificationCard key={e.id} {...e} />;
  });

  // ref={myRef.current[1]}

  return (
    <div className="main-skills-wrapper" id="certifications">
      <div className="line"> </div>
      <div className="section-wrapper">

        <h1>
            Certifications
        </h1>
        <div className="render-certificate-wrapper">{renderCertificate}</div>
      </div>
    </div>
  );
}
