import { MdKeyboardArrowRight, MdOutlineTexture } from "react-icons/md";

import JohnPhoto from "../../img/jarp-about.jpeg";

function AboutMe() {
  return (
    <section className="about mb-hg" id="about">
      <h2 className="about__heading heading--2">About Me</h2>
      <div className="about__text">
        <p className="about__text-1 paragraph paragraph__indent">
          Since I was a child, my passion for the technology has been the same.
          For that reason, I decided to study Software Engineer in the
          University of Puerto Rico - Mayaguez. After many certifications, I'm
          capable to design and build websites for any type of clients from
          scratch and also personalize it as much as clients wanted.
        </p>
        <p className="about__text-2 paragraph paragraph__indent">
          Moreover, I've had the privilege of working with many companies
          totally different areas which give me more experience learning from
          experts in the technology field. Therefore, my main focus these days
          is to design and develop projects from my current company in order to
          keep growing together and improving or learning new things.
        </p>
        <p className="about__text-3 paragraph">
          Here are a few technologies I've been working with recently:
        </p>
        <ul className="about__text__list">
          <div className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <li className="about__text__item about__text__item-1">React</li>
          </div>
          <div className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <li className="about__text__item about__text__item-2">
              JavaScript (ES6+)
            </li>
          </div>
          <div className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <li className="about__text__item about__text__item-3">
              TypeScript
            </li>
          </div>
          <div className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <li className="about__text__item about__text__item-4">(S)CSS3</li>
          </div>
          <div className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <li className="about__text__item about__text__item-5">Java</li>
          </div>
          <div className="about__text__box-item">
            <MdKeyboardArrowRight className="about__text__icon" />
            <li className="about__text__item about__text__item-6">Node.js</li>
          </div>
        </ul>
      </div>
      <picture>
        <img src={JohnPhoto} alt="John Robles Photo" className="about__img" />
      </picture>
    </section>
  );
}

export default AboutMe;
