import { iconsdata } from "../Nav/iconsdata";
import NavIcons from "../Nav/navicons";
import "./contact.css";

export default function ContactMe() {
  const renderContact = iconsdata.map((e) => {
    return <NavIcons key={e.id} {...e} />;
  });

  return (
    <div className="wrapper" id="contact">
        <h1>Contact Me</h1>
      <div className="contact-line"></div>

      <div className="contact-nav-wrapper">{renderContact}</div>

      <div className="copyright-section">
        <p>
            Designed and developed by Wisdom ©️ 2023
        </p>
      </div>
    </div>
  );
}
