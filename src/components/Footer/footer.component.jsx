import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => (
  <div className="footer-copyright text-center py-3">
    © 2022 Copyright: Yosef Singer
    <p>Website Designer | Full Stack Developer</p>
    <div class="rounded-social-buttons">
      <a
        class="social-button facebook"
        href="https://www.facebook.com/"
        target="https://www.facebook.com/"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        class="social-button twitter"
        href="https://www.twitter.com/"
        target="https://www.twitter.com/"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        class="social-button linkedin"
        href="https://www.linkedin.com/"
        target="https://www.linkedin.com/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        class="social-button youtube"
        href="https://www.youtube.com/"
        target="https://www.youtube.com/"
      >
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </a>
      <a
        class="social-button instagram"
        href="https://www.instagram.com/"
        target="https://www.instagram.com/"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
);

export default Footer;
