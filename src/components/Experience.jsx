import { MdKeyboardArrowRight, MdOutlineTexture } from "react-icons/md";

import TableContent from "./TableContent";
import { useState } from "react";

function Experience() {
  const [isWatric, setIsWatric] = useState(true);
  const [isHealth, setIsHealth] = useState(false);
  const [isCervantes, setIsCervantes] = useState(false);
  const [isScore, setIsScore] = useState(false);
  const [currentExp, setCurrentExp] = useState("watric");

  const experienceHandler = (e) => {
    console.log(e.target);
  };
  const watricHandler = (e) => {
    e.preventDefault();
    setIsWatric(true);
    setIsHealth(false);
    setIsCervantes(false);
    setIsScore(false);
    setCurrentExp("watric");
    console.log("watric");
  };
  const healthHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(true);
    setIsCervantes(false);
    setIsScore(false);
    setCurrentExp("health");
    console.log("health computer systems");
  };
  const cervantesHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(false);
    setIsCervantes(true);
    setIsScore(false);
    setCurrentExp("cervantes");
    console.log("the cervantes group");
  };
  const scoreHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(false);
    setIsCervantes(false);
    setIsScore(true);
    setCurrentExp("score");
    console.log("score");
  };

  return (
    <section className="experience mb-hg" id="experience">
      <h2 className="experience__heading heading--2">Where I've Worked</h2>
      <div className="experience__table">
        <div className="experience__table--left">
          <ul className="experience__table--left__list">
            <div
              className="experience__table--left__item-box"
              onClick={watricHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isWatric ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <li>
                <a
                  className={`experience__table--left__item ${
                    isWatric ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  Watric
                </a>
              </li>
            </div>
            <div
              className="experience__table--left__item-box"
              onClick={healthHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isHealth ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <li>
                <a
                  className={`experience__table--left__item ${
                    isHealth ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  Health Computer Systems
                </a>
              </li>
            </div>
            <div
              className="experience__table--left__item-box"
              onClick={cervantesHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isCervantes ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <li>
                <a
                  className={`experience__table--left__item ${
                    isCervantes ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  The Cervantes Group
                </a>
              </li>
            </div>
            <div
              className="experience__table--left__item-box"
              onClick={scoreHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isScore ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <li>
                <a
                  className={`experience__table--left__item ${
                    isScore ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  ScoreInc
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="experience__table--right">
          <TableContent current={currentExp}></TableContent>
        </div>
      </div>
    </section>
  );
}

export default Experience;
