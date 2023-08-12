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

  // Rest of the component code

  return (
    <section className="hero" id="home">
      <p className="hero__text-1 paragraph">Hi, my name is</p>
      <h1 className="hero__heading--1">John Robles.</h1>
      <h2 className="hero__heading--2">I design and build websites.</h2>
      <p className="hero__text-2 paragraph">
        I am a dedicated software engineer driven by the desire to innovate and
        create. Presently, I hold the position of a junior full stack developer
        at ScoreInc.
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

// function Hero() {
//   const [isOpen, SetIsOpen] = useState(false);

//   const navLinkHandler = (e) => {
//     ///////////////////////////////////////////////////////////
//     // Smooth scrolling animation

//     e.preventDefault();
//     const href = e.target.getAttribute("href");
//     // console.log(e.target);
//     // console.log(e.target.getAttribute("class"));

//     // Scroll back to top
//     if (href === "/") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }

//     // Scroll to other links
//     if (href !== "/" && href.startsWith("/")) {
//       const sectionEl = document.querySelector(href);
//       // console.log(sectionEl);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     setIsOpen(!isOpen);
//   };

//   return (
//     <section className="hero">
//       <p className="hero__text-1 paragraph">Hi, my name is</p>
//       <h1 className="hero__heading--1">John Robles.</h1>
//       <h2 className="hero__heading--2">I design and build websites.</h2>
//       <p className="hero__text-2 paragraph">
//         I am a dedicated software engineer driven by the desire to innovate and
//         create. Presently, I hold the position of a junior full stack developer
//         at ScoreInc.
//       </p>
//       <a href="/projects" className="btn" onClick={navLinkHandler}>
//         Check out my latest projects!
//       </a>
//     </section>
//   );
// }

// export default Hero;
