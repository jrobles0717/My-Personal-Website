import { FiExternalLink, FiGithub } from "react-icons/fi";

import Card from "./Card";
import { useState } from "react";
import voshMusic from "../../img/vosh-music.png";

function Projects() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleBtnHandler = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading heading--2 mb-md">
        Some Things I've Built
      </h2>
      <div className="projects__featured mb-hg">
        <picture>
          <img
            src={voshMusic}
            alt="Vosh Music Webpage"
            className="projects__featured--img"
          />
        </picture>
        <div className="projects__featured--text-box">
          <p className="projects__featured--text-box__heading-sub paragraph__xs">
            Featured Project
          </p>
          <h3 className="projects__featured--text-box__heading heading--3 mb-sm">
            Vosh Music
          </h3>
          <p className="projects__featured--text-box__paragraph paragraph__md mb-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            quibusdam ratione est pariatur ipsam at numquam accusantium nobis
            eligendi.
          </p>
          <ul className="projects__featured--text-box__list mb-sm">
            <li className="projects__featured--text-box__item projects__featured--text-box__item--1">
              React
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--2">
              CSS3
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--3">
              Node.js
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--4">
              Vite.js
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--5">
              Netlify
            </li>
          </ul>
          <div className="projects__featured--text-box__link">
            <a
              href="https://github.com/jrobles0717/Vos-Website"
              target="_blank"
              className="icon"
            >
              <FiGithub className="projects__featured--text-box__icon" />
            </a>
            <a href="http://vosh-music.com/" target="_blank" className="icon">
              <FiExternalLink className="projects__featured--text-box__icon" />
            </a>
          </div>
        </div>
      </div>
      <h3 className="projects__heading-2 heading--2 mb-md">
        Other Noteworthy Projects
      </h3>
      <ul className="projects__other mb-lg">
        <li className="projects__other__item projects__other__item--1">
          <Card project="nexter" />
        </li>
        <li className="projects__other__item projects__other__item--2">
          <Card project="trillo" />
        </li>
        <li className="projects__other__item projects__other__item--3">
          <Card project="natours" />
        </li>
        <li className="projects__other__item projects__other__item--4">
          <Card project="omnifood" />
        </li>
        <li className="projects__other__item projects__other__item--5">
          <Card project="forkify" />
        </li>
        <li className="projects__other__item projects__other__item--6">
          <Card project="capstone" />
        </li>
        {toggleBtn ? (
          <>
            <li
              className={`projects__other__item projects__other__item--7 ${
                toggleBtn ? "" : "projects__other__item--hidden"
              }`}
            >
              <Card project="twitter" />
            </li>
            <li
              className={`projects__other__item projects__other__item--8 ${
                toggleBtn ? "" : "projects__other__item--hidden"
              }`}
            >
              <Card project="guerrilla" />
            </li>{" "}
          </>
        ) : (
          ""
        )}
      </ul>
      <div className="projects__btn mb-hg">
        <span className="btn" onClick={toggleBtnHandler}>
          {`Show ${toggleBtn ? "Less" : "More"}`}
        </span>
      </div>
    </section>
  );
}

export default Projects;
