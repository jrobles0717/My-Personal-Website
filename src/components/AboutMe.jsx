import { MdKeyboardArrowRight } from "react-icons/md";
import jARP1200 from "../../img/jarp-about-1200.jpeg";
import jARP400 from "../../img/jarp-about-400.jpeg";
import jARP800 from "../../img/jarp-about-800.jpeg";

function AboutMe() {
  return (
    <section className="about mb-hg" id="about">
      <h2 className="about__heading heading--2">About Me</h2>
      <div className="about__text">
        <p className="about__text-1 paragraph paragraph__indent">
          Ever since my childhood, my unwavering passion for technology has
          driven me forward. This led me to pursue a degree in Software
          Engineering at the University of Puerto Rico - Mayaguez. Alongside my
          academic journey, I have obtained numerous certifications that have
          equipped me with the skills to design and construct websites from
          scratch. I take pride in tailoring these websites to meet the unique
          preferences and requirements of my clients.
        </p>
        <p className="about__text-2 paragraph paragraph__indent">
          Furthermore, I have been fortunate enough to collaborate with diverse
          companies across various industries, enabling me to gain invaluable
          experience and learn from experts in the field of technology.
          Presently, my primary focus revolves around designing and developing
          projects for my current company. This allows me to continuously grow
          alongside the organization and further enhance my expertise by
          exploring new avenues.
        </p>
        <p className="about__text-3 paragraph">
          Some of the recent technologies I have been actively working with
          include:
        </p>
        <ul className="about__text__list">
          <li className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-1">React</span>
          </li>
          <li className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-2">
              JavaScript (ES6+)
            </span>
          </li>
          <li className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-3">
              TypeScript
            </span>
          </li>
          <li className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-4">
              (S)CSS3
            </span>
          </li>
          <li className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-5">Java</span>
          </li>
          <li className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <span className="about__text__item about__text__item-6">
              Node.js
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
        />
      </picture>
    </section>
  );
}

export default AboutMe;
