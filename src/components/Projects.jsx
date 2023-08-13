import { FiExternalLink, FiGithub } from "react-icons/fi";

import Card from "./Card";
import { useState } from "react";
import voshMusic1200 from "../../img/vosh-music-1200.png";
import voshMusic400 from "../../img/vosh-music-400.png";
import voshMusic800 from "../../img/vosh-music-800.png";

function Projects() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleBtnHandler = () => {
    setToggleBtn(!toggleBtn);
  };

  const handleGoToLink = () => {
    window.location.href = "http://vosh-music.com/";
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading heading--2 mb-md">
        Some Things I've Built
      </h2>
      <div
        className="projects__featured mb-hg"
        onClick={handleGoToLink}
        title="https://vosh-music.com/"
      >
        <picture>
          <img
            src={voshMusic800}
            srcSet={`${voshMusic400} 400w, ${voshMusic800} 800w, ${voshMusic1200} 1200w`}
            sizes="(max-width: 800px) 400px, (max-width: 1200px) 800px, 1200px"
            alt="Vosh Music Webpage"
            className="projects__featured--img"
            width="800"
            height="600"
          />
        </picture>
        <div className="projects__featured--text-box">
          <p className="projects__featured--text-box__heading-sub paragraph__md">
            Featured Project
          </p>
          <h3 className="projects__featured--text-box__heading heading--3 mb-sm">
            Vosh Music
          </h3>
          <p className="projects__featured--text-box__paragraph paragraph__md-2 mb-sm">
            The Puerto Rican artist creates captivating and dynamic music by
            fusing Electronic, Jazz, Chillwave, R&B, Rock, and House genres.
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
              aria-label="Link to Vosh GitHub repository"
            >
              <FiGithub className="projects__featured--text-box__icon" />
            </a>
            <a
              href="http://vosh-music.com/"
              target="_blank"
              className="icon"
              aria-label="Link to Vosh website"
            >
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
          <Card project="Nexter" />
        </li>
        <li className="projects__other__item projects__other__item--2">
          <Card project="Trillo" />
        </li>
        <li className="projects__other__item projects__other__item--3">
          <Card project="Natours" />
        </li>
        <li className="projects__other__item projects__other__item--4">
          <Card project="Omnifood" />
        </li>
        <li className="projects__other__item projects__other__item--5">
          <Card project="Forkify" />
        </li>
        <li className="projects__other__item projects__other__item--6">
          <Card project="Capstone" />
        </li>
        {toggleBtn ? (
          <>
            <li
              className={`projects__other__item projects__other__item--7 ${
                toggleBtn ? "" : "projects__other__item--hidden"
              }`}
            >
              <Card project="Twitter" />
            </li>
            <li
              className={`projects__other__item projects__other__item--8 ${
                toggleBtn ? "" : "projects__other__item--hidden"
              }`}
            >
              <Card project="Guerrilla" />
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
