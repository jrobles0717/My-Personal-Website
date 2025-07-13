import Card from "./Card";
import React from "react";

const otherProjects = [
  "Blogs",
  "Nexter",
  "Trillo",
  "Natours",
  "Omnifood",
  "Forkify",
  "Capstone",
  "Twitter",
  "Guerrilla",
];

export default function OtherProjectsList({ toggleBtn, reverseAnimation }) {
  return (
    <ul className="projects__other">
      {otherProjects
        .slice(0, toggleBtn ? otherProjects.length : 6)
        .map((project, index) => (
          <li
            key={index}
            className={`projects__other__item ${
              reverseAnimation ? "aos-reverse" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={`${100 * (index + 1)}`}
          >
            <Card project={project} />
          </li>
        ))}
    </ul>
  );
}
