import { MdKeyboardArrowRight, MdOutlineTexture } from "react-icons/md";

import TableContent from "../components/TableContent";
import { useState } from "react";

function Experience() {
  const [isWatric, setIsWatric] = useState(true);
  const [isHealth, setIsHealth] = useState(false);
  const [isCervantes, setIsCervantes] = useState(false);
  const [isScore, setIsScore] = useState(false);
  const [isLeadwire, setIsLeadwire] = useState(false);
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
    setIsLeadwire(false);
    setCurrentExp("watric");
    console.log("watric");
  };
  const healthHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(true);
    setIsCervantes(false);
    setIsScore(false);
    setIsLeadwire(false);
    setCurrentExp("health");
    console.log("health computer systems");
  };
  const cervantesHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(false);
    setIsCervantes(true);
    setIsScore(false);
    setIsLeadwire(false);
    setCurrentExp("cervantes");
    console.log("the cervantes group");
  };
  const scoreHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(false);
    setIsCervantes(false);
    setIsScore(true);
    setIsLeadwire(false);
    setCurrentExp("score");
    console.log("score");
  };
  const leadwireHandler = (e) => {
    e.preventDefault();
    setIsWatric(false);
    setIsHealth(false);
    setIsCervantes(false);
    setIsScore(false);
    setIsLeadwire(true);
    setCurrentExp("leadwire");
    console.log("leadwire");
  };

  return (
    <section className="experience mb-hg" id="experience">
      <h2 className="experience__heading heading--2">Where I've Worked</h2>
      <div className="experience__table">
        <div className="experience__table--left">
          <ul className="experience__table--left__list">
            <li
              className="experience__table--left__item-box"
              onClick={watricHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isWatric ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <div style={{ display: "flex" }}>
                <span
                  className={`experience__table--left__item paragraph__md ${
                    isWatric ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  Watric
                </span>
              </div>
            </li>
            <li
              className="experience__table--left__item-box"
              onClick={healthHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isHealth ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <div style={{ display: "flex" }}>
                <span
                  className={`experience__table--left__item paragraph__md ${
                    isHealth ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  Health Computer Systems
                </span>
              </div>
            </li>
            <li
              className="experience__table--left__item-box"
              onClick={cervantesHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isCervantes ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <div style={{ display: "flex" }}>
                <span
                  className={`experience__table--left__item paragraph__md ${
                    isCervantes ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  The Cervantes Group
                </span>
              </div>
            </li>
            <li
              className="experience__table--left__item-box"
              onClick={scoreHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isScore ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <div style={{ display: "flex" }}>
                <span
                  className={`experience__table--left__item paragraph__md ${
                    isScore ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  ScoreInc
                </span>
              </div>
            </li>
            <li
              className="experience__table--left__item-box"
              onClick={leadwireHandler}
            >
              <div
                className={`experience__table--left__item-line ${
                  isLeadwire ? "experience__table--left__item-line-active" : ""
                }`}
              ></div>
              <div style={{ display: "flex" }}>
                <span
                  className={`experience__table--left__item paragraph__md ${
                    isLeadwire ? "experience__table--left__item-selected" : ""
                  }`}
                >
                  LeadWire
                </span>
              </div>
            </li>
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
