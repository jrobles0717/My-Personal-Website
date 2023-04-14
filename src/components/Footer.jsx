import { FiGitBranch, FiStar } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <a
          href="https://github.com/jrobles0717/My-Personal-Website"
          className="footer__copyright--link"
          target="_blank"
        >
          <div className="footer__copyright--link__text">
            Designed & Built by John Robles
          </div>
          <div className="footer__copyright--link__stats">
            <span>
              <FiStar />
            </span>
            <span>
              <FiGitBranch />
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
