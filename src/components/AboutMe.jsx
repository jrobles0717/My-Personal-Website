import { MdKeyboardArrowRight, MdOutlineTexture } from "react-icons/md";

import JohnPhoto from "../../img/jarp-about.jpeg";

function AboutMe() {
  return (
    <section className="about mb-hg" id="about">
      <h2 className="about__heading heading--2">About Me</h2>
      <div className="about__text">
        <p className="about__text-1 paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          natus unde saepe beatae fuga deserunt id. Necessitatibus, dolorum.
          Natus harum voluptatum voluptatem sint, quo quisquam sunt? Repudiandae
          corrupti ipsum labore!
        </p>
        <p className="about__text-2 paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          dolorum excepturi amet dolores, fugit commodi, enim fugiat pariatur
          sunt dicta, quae laboriosam mollitia? Dolorum repellat exercitationem,
          facilis doloremque et ab!
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
            <li className="about__text__item about__text__item-3">HTML5</li>
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
