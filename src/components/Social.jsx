import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

function Social({ direction }) {
  if (direction === "column") {
    return (
      <div className="social">
        <ul className="social__list">
          <li className="social__item">
            <a
              href="https://github.com/jrobles0717"
              className="icon"
              target="_blank"
              aria-label="Link to my GitHub Profile"
            >
              <FiGithub className="social__icon" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.instagram.com/j_robles0717/"
              className="icon"
              target="_blank"
              aria-label="Link to my Instagram Profile"
            >
              <FiInstagram className="social__icon" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://twitter.com/j_robles0717"
              className="icon"
              target="_blank"
              aria-label="Link to my Twitter Profile"
            >
              <FiTwitter className="social__icon" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.linkedin.com/in/john-andrew-robles-perez-b1a85a106/"
              className="icon"
              target="_blank"
              aria-label="link to my LinkedIn Profile"
            >
              <FiLinkedin className="social__icon" />
            </a>
          </li>
          <li className="social__item">
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
      <div className="social-row">
        <ul className="social-row__list">
          <li className="social-row__item">
            <a
              href="https://github.com/jrobles0717"
              className="icon"
              target="_blank"
              aria-label="GitHub"
            >
              <FiGithub className="social-row__icon" />
            </a>
          </li>
          <li className="social-row__item">
            <a
              href="https://www.instagram.com/j_robles0717/"
              className="icon"
              target="_blank"
              aria-label="Instagram"
            >
              <FiInstagram className="social-row__icon" />
            </a>
          </li>
          <li className="social-row__item">
            <a
              href="https://twitter.com/j_robles0717"
              className="icon"
              target="_blank"
              aria-label="Twitter"
            >
              <FiTwitter className="social-row__icon" />
            </a>
          </li>
          <li className="social-row__item">
            <a
              href="https://www.linkedin.com/in/john-andrew-robles-perez-b1a85a106/"
              className="icon"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="social-row__icon" />
            </a>
          </li>
          <li className="social-row__item">
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
