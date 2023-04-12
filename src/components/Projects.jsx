import { FiExternalLink, FiGithub } from "react-icons/fi";

import voshMusic from "../../img/vosh-music.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__heading heading--2 mb-md">
        Some Things I've Built
      </h2>
      <div className="projects__featured">
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
    </section>
  );
}

export default Projects;
