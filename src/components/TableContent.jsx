import { MdKeyboardArrowRight, MdOutlineTexture } from "react-icons/md";
function TableContent({ current }) {
  return (
    <>
      <div
        className={`experience__table--right-container experience__table--right-container--1 ${
          current === "watric"
            ? "experience__table--right-container--active"
            : ""
        }`}
      >
        <h3 className="experience__table--right__heading heading--3">
          Web Development Intern{" "}
          <span className="heading__span">@ Watric Resources</span>
        </h3>
        <p className="experience__table--right__date paragraph paragraph__sm mb-sm">
          June - August 2019
        </p>
        <ul className="experience__table--right__list">
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Fix the server bugs for the website.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Update and added new information in some pages for new incoming
              products, about to drop in the market.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Generated frontend and cloud solutions: Windows 10, Apache, PHP,
              HTML, CSS, Heroku, HostGator.
            </li>
          </div>
        </ul>
      </div>
      <div
        className={`experience__table--right-container experience__table--right-container--2 ${
          current === "health"
            ? "experience__table--right-container--active"
            : ""
        }`}
      >
        <h3 className="experience__table--right__heading heading--3">
          Back-end Developer{" "}
          <span className="heading__span">@ Health Computer Systems</span>
        </h3>
        <p className="experience__table--right__date paragraph paragraph__sm mb-sm">
          November - August 2022
        </p>
        <ul className="experience__table--right__list">
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Designed, analyzed, documented, and deployed applications
              utilizing XML, JSON, Java, Maven, Spring Boot, SFTP protocol, AWS,
              and MS SQL Server.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Developed file sharing, sending and transfer solutions interfacing
              with client and internal systems, applications, SW and platforms
              using XML and JSON.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Performed tests and updates within XML, JSON environments in
              addition to gathering requirements and producing documentation
              with instructions for execution of coding solutions, design and
              layouts for application.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Managed and maintained Windows Server and SW written in Java,
              Maven, XML, JSON offering technical support engineering L1-3.
            </li>
          </div>
        </ul>
      </div>
      <div
        className={`experience__table--right-container experience__table--right-container--3 ${
          current === "cervantes"
            ? "experience__table--right-container--active"
            : ""
        }`}
      >
        <h3 className="experience__table--right__heading heading--3">
          Software Developer Consultant{" "}
          <span className="heading__span">@ The Cervantes Group</span>
        </h3>
        <p className="experience__table--right__date paragraph paragraph__sm mb-sm">
          August - April 2023
        </p>
        <ul className="experience__table--right__list">
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Participate in the full Software Development Life Cycle (SDLC)
              including requirements gathering, documentation, coding/execution,
              code review/testing, implementation and reports creation.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Develop solutions with JavaScript, PHP and Ninja JS for Microjuris
              Application for customer named Centrix participating in all phases
              of the Agile Software Development Life Cycle (SDLC).
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Generate reports with JasperReports, an open-source tool which
              allows to write and edit report in Sodalis Application while
              creating and configuring API’s in Unify Application.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Create and develop Transaction Request API’s (Payment Gateway).
            </li>
          </div>
        </ul>
      </div>
      <div
        className={`experience__table--right-container experience__table--right-container--4 ${
          current === "fusion"
            ? "experience__table--right-container--active"
            : ""
        }`}
      >
        <h3 className="experience__table--right__heading heading--3">
          Junior Full Stack Developer{" "}
          <span className="heading__span">@ ScoreInc</span>
        </h3>
        <p className="experience__table--right__date paragraph paragraph__sm mb-sm">
          April - Present
        </p>
        <ul className="experience__table--right__list">
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Design and build applications using React, S(CSS) and Java.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Leading front-end and back-end development projects.
            </li>
          </div>
          <div className="experience__table--right__box-item">
            <MdKeyboardArrowRight className="experience__table--right__icon" />
            <li className="experience__table--right__item paragraph paragraph-md">
              Write documentation for current projects.
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default TableContent;
