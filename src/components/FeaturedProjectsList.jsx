import FeaturedProject from "./FeaturedProject";
import React from "react";
import voshMusic1200 from "../../img/Vos-hero-banner-blue-1200.png";
// import irobMusic from "../../img/irob-banner.png";
import voshMusic400 from "../../img/Vos-hero-banner-blue-400.png";
import voshMusic800 from "../../img/Vos-hero-banner-blue-800.png";

const featuredProjects = [
  {
    title: "Vosh Music",
    description:
      "The Puerto Rican artist creates captivating and dynamic music by fusing Electronic, Jazz, Chillwave, R&B, Rock, and House genres.",
    technologies: ["React", "CSS3", "Node.js", "Vite.js", "Netlify"],
    github: "https://github.com/jrobles0717/Vos-Website",
    live: "http://vosh-music.com/",
    image: {
      src: voshMusic800,
      srcSet400: voshMusic400,
      srcSet800: voshMusic800,
      srcSet1200: voshMusic1200,
    },
  },
  // {
  //   image: {
  //     src: irobMusic,
  //     srcSet400: irobMusic,
  //     srcSet800: irobMusic,
  //     srcSet1200: irobMusic,
  //   },
  //   title: "IROB Music",
  //   description:
  //     "Ivan Robles is one of Puerto Rico's most celebrated DJs and producers, known for his electrifying performances and passion for house music.",
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Node.js",
  //     "Vite.js",
  //     "Netlify",
  //   ],
  //   github: "https://github.com/jrobles0717/Ivan-Robles-App",
  //   live: "https://ivanroblesmusic.com/",
  // },
];

const FeaturedProjectsList = () => {
  return (
    <div className="projects__featured">
      {featuredProjects.map((project, index) => (
        <FeaturedProject
          key={index}
          {...project}
          aosDelay={100 * (index + 1)}
        />
      ))}
    </div>
  );
};

export default FeaturedProjectsList;
