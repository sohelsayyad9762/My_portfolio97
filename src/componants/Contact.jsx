import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container" id="Contact">
        <h1 id="h11">Contact Me</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
          data-aos-duration="1000"
        >

          <a href="https://www.instagram.com/beingsohel59/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.instagram.com/beingsohel59/" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/sohel-sayyad-793a23233/"  target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/being_sohel_59"  target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/sohelsayyad9762"  target="_blank" className="items">
            <FaGithub className="icons" />
          </a>

          <a href="mailto:sohelsayyad9762@gmail.com"  target="_blank" className="items">
            <BiLogoGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
