import { useState } from "react";

function Hero() {
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
    <section className="hero">
      <p className="hero__text-1 paragraph">Hi, my name is</p>
      <h1 className="hero__heading--1">John Robles.</h1>
      <h2 className="hero__heading--2">I design and build websites.</h2>
      <p className="hero__text-2 paragraph">
        I'm a software engineer with the passion to create new things.
        Currently, working as a junior full stack developer at ScoreInc.
      </p>
      <a href="#projects" className="btn" onClick={navLinkHandler}>
        Check out my latest projects!
      </a>
    </section>
  );
}

export default Hero;
