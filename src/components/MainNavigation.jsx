import "../../css/style.css";

import { useEffect, useRef, useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import resumeJARP from "../../img/Resume-JARP-Nov2023.pdf";
import { useScrollToElement } from "../hooks/useScrollToElement";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null); // Create a ref for the About section
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  // Add more refs for other sections as needed

  useScrollToElement(homeRef);
  useScrollToElement(aboutRef); // Scroll to the About section
  useScrollToElement(experienceRef);
  useScrollToElement(projectsRef);
  useScrollToElement(contactRef);
  // Call the hook for other sections as needed

  return (
    <header className="navigation">
      <div className="navigation__mobile">
        <input
          type="checkbox"
          className="navigation__mobile__checkbox"
          id="navi-toggle"
        />
        <label
          htmlFor="navi-toggle"
          className="navigation__mobile__button"
          onClick={mobileNavHandler}
        >
          <span
            className={`navigation__mobile__icon ${
              isOpen ? "navigation__mobile__icon__close" : ""
            }`}
          >
            &nbsp;
          </span>
        </label>

        <div
          className={`navigation__mobile__background ${
            !isOpen ? "close-background" : "open-background"
          }`}
        >
          &nbsp;
        </div>
      </div>
      <nav
        className={`navigation__main-nav ${
          isOpen ? "navigation__main-nav__nav-open" : ""
        }`}
      >
        <ul className="navigation__main-nav-list">
          <li className="navigation__main-nav-item">
            <AnchorLink
              className="navigation__main-nav-link--active"
              href="#home"
              onClick={() => setIsOpen(!isOpen)}
              title="Go to home section"
            >
              Home
            </AnchorLink>
          </li>
          <li className="navigation__main-nav-item">
            <AnchorLink
              className="navigation__main-nav-link--active"
              href="#about"
              onClick={() => setIsOpen(!isOpen)}
              title="Go to about me section"
            >
              About Me
            </AnchorLink>
          </li>
          <li className="navigation__main-nav-item">
            <AnchorLink
              className="navigation__main-nav-link--active"
              href="#experience"
              onClick={() => setIsOpen(!isOpen)}
              title="Go to experience section"
            >
              Experience
            </AnchorLink>
          </li>
          <li className="navigation__main-nav-item">
            <AnchorLink
              className="navigation__main-nav-link--active"
              href="#projects"
              onClick={() => setIsOpen(!isOpen)}
              title="Go to projects section"
            >
              Projects
            </AnchorLink>
          </li>
          <li className="navigation__main-nav-item">
            <AnchorLink
              className="navigation__main-nav-link--active"
              href="#contact"
              onClick={() => setIsOpen(!isOpen)}
              title="Go to contact section"
            >
              Contact
            </AnchorLink>
          </li>
          <li className="navigation__main-nav-item">
            <a
              className="btn navigation__main-nav-link--active navigation__main-nav-link-cta"
              href={resumeJARP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
