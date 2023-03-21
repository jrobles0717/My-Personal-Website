import "../../css/general.css";
import "../../css/style.css";

function MainNavigation() {
  return (
    <header className={`header`}>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={() => {}}>
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about" onClick={() => {}}>
              About Me
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#experience" onClick={() => {}}>
              Experience
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects" onClick={() => {}}>
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact" onClick={() => {}}>
              Contact
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#resume" onClick={() => {}}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
