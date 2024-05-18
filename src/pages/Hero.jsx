import { useRef, useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { useScrollToElement } from "../hooks/useScrollToElement";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const projectsRef = useRef(null); // Create a ref for the Projects section

  useScrollToElement(projectsRef); // Scroll to the Projects section

  const navLinkHandler = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "/" && href.startsWith("/")) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(!isOpen);
  };

  const handleOnClickCompany = () => {
    window.open("https://www.leadwireapp.com", "_blank");
  };

  return (
    <section className="hero" id="home">
      <p className="hero__text-1 paragraph">Hi, my name is</p>
      <h1 className="hero__heading--1">John Robles.</h1>
      <h2 className="hero__heading--2">I design and build websites.</h2>
      <p className="hero__text-2 paragraph paragraph__md-2">
        I am a dedicated software engineer driven by the desire to innovate and
        create. Currently, I hold the position of a{" "}
        <span className="hero__text-position">Lead Full Stack Engineer</span> at{" "}
        <span className="hero__text-green" onClick={handleOnClickCompany}>
          LeadWire, LLC.
        </span>
      </p>
      <AnchorLink
        className="btn"
        href="#projects"
        title="Go to projects section"
      >
        Check out my latest projects!
      </AnchorLink>
    </section>
  );
}

export default Hero;
