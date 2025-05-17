import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import TwitterIcon from "../icons/TwitterIcon";

function Social({ direction }) {
  if (direction === "column") {
    return (
      <div
        className="social"
        data-aos="fade-left" // Animation for vertical layout
        data-aos-duration="1000"
      >
        <ul className="social__list">
          <li className="social__item" data-aos="zoom-in" data-aos-delay="100">
            <a
              href="https://github.com/jrobles0717"
              className="icon"
              target="_blank"
              aria-label="Link to my GitHub Profile"
            >
              <FiGithub className="social__icon" />
            </a>
          </li>
          <li className="social__item" data-aos="zoom-in" data-aos-delay="200">
            <a
              href="https://www.instagram.com/j_robles0717/"
              className="icon"
              target="_blank"
              aria-label="Link to my Instagram Profile"
            >
              <FiInstagram className="social__icon" />
            </a>
          </li>
          <li className="social__item" data-aos="zoom-in" data-aos-delay="300">
            <TwitterIcon direction={direction} />
          </li>
          <li className="social__item" data-aos="zoom-in" data-aos-delay="400">
            <a
              href="https://www.linkedin.com/in/john-andrew-robles-perez-b1a85a106/"
              className="icon"
              target="_blank"
              aria-label="Link to my LinkedIn Profile"
            >
              <FiLinkedin className="social__icon" />
            </a>
          </li>
          <li className="social__item" data-aos="zoom-in" data-aos-delay="500">
            <a
              href="https://www.facebook.com/johnandrew.robles/"
              className="icon"
              target="_blank"
              aria-label="Link to my Facebook Profile"
            >
              <FiFacebook className="social__icon" />
            </a>
          </li>
        </ul>
      </div>
    );
  }

  if (direction === "row") {
    return (
      <div
        className="social-row"
        data-aos="fade-up" // Animation for horizontal layout
        data-aos-duration="1000"
      >
        <ul className="social-row__list">
          <li
            className="social-row__item"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <a
              href="https://github.com/jrobles0717"
              className="icon"
              target="_blank"
              aria-label="GitHub"
            >
              <FiGithub className="social-row__icon" />
            </a>
          </li>
          <li
            className="social-row__item"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.instagram.com/j_robles0717/"
              className="icon"
              target="_blank"
              aria-label="Instagram"
            >
              <FiInstagram className="social-row__icon" />
            </a>
          </li>
          <li
            className="social-row__item"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <TwitterIcon direction={direction} />
          </li>
          <li
            className="social-row__item"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <a
              href="https://www.linkedin.com/in/john-andrew-robles-perez-b1a85a106/"
              className="icon"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="social-row__icon" />
            </a>
          </li>
          <li
            className="social-row__item"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <a
              href="https://www.facebook.com/johnandrew.robles/"
              className="icon"
              target="_blank"
              aria-label="Facebook"
            >
              <FiFacebook className="social-row__icon" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
