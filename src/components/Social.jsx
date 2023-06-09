import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

function Social() {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <a
            href="https://github.com/jrobles0717"
            className="icon"
            target="_blank"
          >
            <FiGithub className="social__icon" />
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.instagram.com/j_robles0717/"
            className="icon"
            target="_blank"
          >
            <FiInstagram className="social__icon" />
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://twitter.com/j_robles0717"
            className="icon"
            target="_blank"
          >
            <FiTwitter className="social__icon" />
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.linkedin.com/in/john-andrew-robles-perez-b1a85a106/"
            className="icon"
            target="_blank"
          >
            <FiLinkedin className="social__icon" />
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.facebook.com/johnandrew.robles/"
            className="icon"
            target="_blank"
          >
            <FiFacebook className="social__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
