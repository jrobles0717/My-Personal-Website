import { MdKeyboardArrowRight } from "react-icons/md";
import jARP1200 from "../../img/JARP-Abril-2024-1200.jpeg";
import jARP400 from "../../img/JARP-Abril-2024-400.jpeg";
import jARP800 from "../../img/JARP-Abril-2024-800.jpeg";

function AboutMe() {
  return (
    <section className="about mb-hg" id="about">
      <h2 className="about__heading heading--2" data-aos="fade-up">
        About Me
      </h2>
      <div className="about__text">
        <p
          className="about__text-1 paragraph paragraph__indent paragraph__md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ever since my childhood, my unwavering passion for technology has
          driven me forward. This led me to pursue a degree in Software
          Engineering at the University of Puerto Rico - Mayaguez. Alongside my
          academic journey, I have obtained numerous certifications that have
          equipped me with the skills to design and construct websites from
          scratch. I take pride in tailoring these websites to meet the unique
          preferences and requirements of my clients.
        </p>
        <p
          className="about__text-2 paragraph paragraph__indent paragraph__md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Furthermore, I have been fortunate enough to collaborate with diverse
          companies across various industries, enabling me to gain invaluable
          experience and learn from experts in the field of technology.
          Presently, my primary focus revolves around designing and developing
          projects for my current company. This allows me to continuously grow
          alongside the organization and further enhance my expertise by
          exploring new avenues.
        </p>
        <p
          className="about__text-3 paragraph paragraph__md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Some of the recent technologies I have been actively working with
          include:
        </p>
        <ul className="about__text__list">
          <li className="about__text__box-item" data-aos="fade-right">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-1 paragraph__md">
              React
            </span>
          </li>
          <li
            className="about__text__box-item"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-2 paragraph__md">
              PostgreSQL
            </span>
          </li>
          <li
            className="about__text__box-item"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-3 paragraph__md">
              TypeScript
            </span>
          </li>
          <li
            className="about__text__box-item"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-4 paragraph__md">
              Heroku
            </span>
          </li>
          <li
            className="about__text__box-item"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-5 paragraph__md">
              GraphQL
            </span>
          </li>
          <li
            className="about__text__box-item"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-6 paragraph__md">
              Node/Express js
            </span>
          </li>
        </ul>
      </div>
      <picture>
        <img
          src={jARP1200}
          srcSet={`${jARP400} 400w, ${jARP800} 800w, ${jARP1200} 1200w`}
          sizes="(max-width: 800px) 400px, (max-width: 1200px) 800px, 1200px"
          alt="John Robles Photo"
          className="about__img"
          width="1200"
          height="800"
          data-aos="zoom-in" // Example animation for the image
        />
      </picture>
    </section>
  );
}

export default AboutMe;
