import { FiExternalLink, FiGithub } from "react-icons/fi";

import voshMusic from "../../img/vosh-music.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__heading heading--2">Some Things I've Built</h2>
      <div className="projects__featured">
        <picture>
          <img
            src={voshMusic}
            alt="Vosh Music Webpage"
            className="projects__featured--img"
          />
        </picture>
        <div className="projects__featured--text-box">
          <p className="projects__featured--text-box__heading-sub paragraph__sm">
            Featured Project
          </p>
          <h3 className="projects__featured--text-box__heading heading--3">
            Vosh Music
          </h3>
          <p className="projects__featured--text-box__paragraph paragraph__md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            quibusdam ratione est pariatur ipsam at numquam accusantium nobis
            eligendi.
          </p>
          <ul className="projects__featured--text-box__list">
            <li className="projects__featured--text-box__item projects__featured--text-box__item--1">
              React
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--2">
              CSS3
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--3">
              NPM
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--4">
              Vite.js
            </li>
            <li className="projects__featured--text-box__item projects__featured--text-box__item--5">
              Netlify
            </li>
          </ul>
          <div className="projects__featured--text-box__link">
            <FiGithub className="projects__featured--text-box__icon" />
            <FiExternalLink className="projects__featured--text-box__icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
