import "../../css/style.css";

import { useEffect, useState } from "react";

import resumeJARP from "../../img/Resume-JARP-Mar2023.pdf";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavHandler = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const navLinkHandler = (e) => {
    ///////////////////////////////////////////////////////////
    // Smooth scrolling animation

    e.preventDefault();
    const href = e.target.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(!isOpen);
  };

  return (
    <header className="navigation">
      <div className="navigation__mobile">
        <input
          type="checkbox"
          class="navigation__mobile__checkbox"
          id="navi-toggle"
        />
        <label
          htmlFor="navi-toggle"
          class="navigation__mobile__button"
          onClick={mobileNavHandler}
        >
          <span
            class={`navigation__mobile__icon ${
              isOpen ? "navigation__mobile__icon__close" : ""
            }`}
          >
            &nbsp;
          </span>
        </label>

        <div
          class={`navigation__mobile__background ${
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
          <li class="navigation__main-nav-item">
            <a
              className="navigation__main-nav-link"
              href="#"
              onClick={navLinkHandler}
            >
              Home
            </a>
          </li>
          <li class="navigation__main-nav-item">
            <a
              className="navigation__main-nav-link"
              href="#about"
              onClick={navLinkHandler}
            >
              About Me
            </a>
          </li>
          <li class="navigation__main-nav-item">
            <a
              className="navigation__main-nav-link"
              href="#experience"
              onClick={navLinkHandler}
            >
              Experience
            </a>
          </li>
          <li class="navigation__main-nav-item">
            <a
              className="navigation__main-nav-link"
              href="#projects"
              onClick={navLinkHandler}
            >
              Projects
            </a>
          </li>
          <li class="navigation__main-nav-item">
            <a
              className="navigation__main-nav-link"
              href="#contact"
              onClick={navLinkHandler}
            >
              Contact
            </a>
          </li>
          <li class="navigation__main-nav-item">
            <a
              className="btn navigation__main-nav-link navigation__main-nav-link-cta"
              href={resumeJARP}
              target="_blank"
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
