import React, { useState } from "react";

import FeaturedProjectsList from "../components/FeaturedProjectsList";
import OtherProjectsList from "../components/OtherProjectsList";

function Projects() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const toggleBtnHandler = () => {
    if (toggleBtn) {
      setReverseAnimation(true);
      setTimeout(() => {
        setToggleBtn(false);
        setReverseAnimation(false);
      }, 300);
    } else {
      setToggleBtn(true);
    }
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading heading--2 mb-md" data-aos="fade-up">
        Some Things I've Built
      </h2>

      <FeaturedProjectsList />

      <h3 className="projects__heading-2 heading--2 mb-md" data-aos="fade-up">
        Other Noteworthy Projects
      </h3>
      <OtherProjectsList
        toggleBtn={toggleBtn}
        reverseAnimation={reverseAnimation}
      />

      <div className="projects__btn mb-hg mt-md">
        <span className="btn" onClick={toggleBtnHandler}>
          {`Show ${toggleBtn ? "Less" : "More"}`}
        </span>
      </div>
    </section>
  );
}

export default Projects;
