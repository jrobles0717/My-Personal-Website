import "../../css/style.css";

import resumeJARP from "../../img/Resume-JARP-Mar2023.pdf";
import { useState } from "react";

function MainNavigation() {
  const [isOpen, SetIsOpen] = useState(false);

  const navLinkHandler = (e) => {
    ///////////////////////////////////////////////////////////
    // Smooth scrolling animation

    e.preventDefault();
    const href = e.target.getAttribute("href");
    // console.log(e.target);
    // console.log(e.target.getAttribute("class"));

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
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(!isOpen);
  };

  return (
    <header className={`header`}>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={navLinkHandler}>
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about" onClick={navLinkHandler}>
              About Me
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#experience"
              onClick={navLinkHandler}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#projects"
              onClick={navLinkHandler}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#contact"
              onClick={navLinkHandler}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="btn main-nav-link main-nav-link-cta"
              href={resumeJARP}
              target="_blank"
              // download={"Resume-John-Robles"}
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
