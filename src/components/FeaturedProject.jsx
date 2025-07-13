import { FiExternalLink, FiGithub } from "react-icons/fi";

import React from "react";

const FeaturedProject = ({
  title,
  description,
  technologies,
  github,
  live,
  image,
  aosDelay,
}) => {
  const handleGoToLink = () => {
    window.open(live, "_blank");
  };

  return (
    <div
      className="projects__featured mb-hg"
      onClick={handleGoToLink}
      title={live}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <picture>
        <source
          srcSet={`
            ${image.srcSet400} 400w,
            ${image.srcSet800} 800w,
            ${image.srcSet1200} 1200w
          `}
          sizes="(max-width: 400px) 400px,
                 (max-width: 800px) 800px,
                 1200px"
        />
        <img
          src={image.src}
          alt={title}
          className="projects__featured--img"
          width="800"
          height="600"
        />
      </picture>

      <div
        className="projects__featured--text-box"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="projects__featured--text-box__heading-sub paragraph__md">
          Featured Project
        </p>
        <h3
          className="projects__featured--text-box__heading heading--3 mb-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {title}
        </h3>
        <p
          className="projects__featured--text-box__paragraph paragraph__sm mb-sm"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {description}
        </p>
        <ul
          className="projects__featured--text-box__list mb-sm"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {technologies.map((tech, index) => (
            <li
              key={index}
              className={`projects__featured--text-box__item projects__featured--text-box__item--${index + 1}`}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div
          className="projects__featured--text-box__link"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href={github}
            target="_blank"
            className="icon"
            aria-label="Link to Vosh GitHub repository"
          >
            <FiGithub className="projects__featured--text-box__icon" />
          </a>
          <a
            href={live}
            target="_blank"
            className="icon"
            aria-label="Link to Vosh website"
          >
            <FiExternalLink className="projects__featured--text-box__icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
