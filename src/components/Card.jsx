import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

function Card({ project }) {
  // finding github repos
  const findGithubRepo = (repo) => {
    if (repo === "Nexter") {
      return "https://github.com/jrobles0717/Nexter";
    }
    if (repo === "Trillo") {
      return "https://github.com/jrobles0717/Trillo";
    }
    if (repo === "Natours") {
      return "https://github.com/jrobles0717/Natours-Project";
    }
    if (repo === "Omnifood") {
      return "https://github.com/jrobles0717/Omnifood";
    }
    if (repo === "Forkify") {
      return "https://github.com/jrobles0717/forkify-app";
    }
    if (repo === "Twitter") {
      return "https://github.com/jrobles0717/Twitter-Style-Services";
    }
    if (repo === "Guerrilla") {
      return "https://github.com/jrobles0717/Guerrilla-App";
    }
    if (repo === "Capstone") {
      return "https://github.com/capstone-2022";
    }
  };
  // finding website
  const findWebsite = (repo) => {
    if (repo === "Nexter") {
      return "https://nexter-jarobles.netlify.app";
    }
    if (repo === "Trillo") {
      return "https://trillo-jarobles.netlify.app";
    }
    if (repo === "Natours") {
      return "https://natours-jarobles.netlify.app";
    }
    if (repo === "Omnifood") {
      return "https://jrobles-omnifood.netlify.app";
    }
    if (repo === "Forkify") {
      return "https://forkify-jrobles.netlify.app";
    }
  };
  // finding description
  const findDescription = (repo) => {
    if (repo === "Nexter") {
      return "Nexter can help you find a sweet home to live. The purpose of this project was to design a webpage using grid implemantation";
    }
    if (repo === "Trillo") {
      return "All-in-one booking app. The purpose of this app was to design a webpage using flexbox implemantation";
    }
    if (repo === "Natours") {
      return "Exciting tours for adventurous people. The purpose of this app was to design a webpage using float implemantation";
    }
    if (repo === "Omnifood") {
      return "Omnifood is an AI-powered food subscription. The purpose of this app was to design a webpage using different techniques";
    }
    if (repo === "Forkify") {
      return "Recipe application with custom recipe uploads. The purpose of this app was to practice MVC arquitecture in JavaScript";
    }
    if (repo === "Twitter") {
      return "Twitter style services have similar functions and implemantation as Twitter. The purpose was to get, create, update, and delete data using SQL";
    }
    if (repo === "Capstone") {
      return "Allow individual farmers and small organizations to grow economically and scale as much as they can by selling their products via the Internet";
    }
    if (repo === "Guerrilla") {
      return "Guerrilla is a mobile application which allows you to create sport events and play with those who added to the list";
    }
  };

  // finding technologies list
  const findTechList = (repo) => {
    if (
      repo === "Nexter" ||
      repo === "Trillo" ||
      repo === "Natours" ||
      repo === "Forkify" ||
      repo === "Omnifood"
    ) {
      return (
        <ul className="projects__card--footer__list">
          <li className="projects__card--footer__item">HTML5</li>
          <li className="projects__card--footer__item">
            {repo === "Omnifood" ? "CSS3" : "SCSS"}
          </li>
          <li className="projects__card--footer__item">JS</li>
          <li className="projects__card--footer__item">Node</li>
          <li className="projects__card--footer__item">Netlify</li>
        </ul>
      );
    }
    if (repo === "Twitter") {
      return (
        <ul className="projects__card--footer__list">
          <li className="projects__card--footer__item">Python</li>
          <li className="projects__card--footer__item">Flask</li>
          <li className="projects__card--footer__item">PostgreSQL</li>
        </ul>
      );
    }
    if (repo === "Capstone") {
      return (
        <ul className="projects__card--footer__list">
          <li className="projects__card--footer__item">React</li>
          <li className="projects__card--footer__item">Java</li>
          <li className="projects__card--footer__item">PostgreSQL</li>
          <li className="projects__card--footer__item">Heroku</li>
        </ul>
      );
    }
    if (repo === "Guerrilla") {
      return (
        <ul className="projects__card--footer__list">
          <li className="projects__card--footer__item">React Native</li>
          <li className="projects__card--footer__item">Redux</li>
          <li className="projects__card--footer__item">Expo</li>
          <li className="projects__card--footer__item">Yarn</li>
          <li className="projects__card--footer__item">SQLite</li>
        </ul>
      );
    }
  };

  const noWebsiteLink = () => {
    if (
      project === "Twitter" ||
      project === "Capstone" ||
      project === "Guerrilla"
    ) {
      return true;
    }

    return false;
  };

  // return Card
  return (
    <div className="projects__card">
      <header className="projects__card--header mb-sm">
        <div className="projects__card--header__top">
          <div className="projects__card--header__top--left">
            <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
          </div>
          <div className="projects__card--header__top--right">
            <a
              href={findGithubRepo(project)}
              target="_blank"
              className="icon"
              aria-label={`Go to ${project} GitHub repository`}
            >
              <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
            </a>
            {noWebsiteLink() ? (
              ""
            ) : (
              <a
                href={findWebsite(project)}
                target="_blank"
                className="icon"
                aria-label={`Go to the ${project} website`}
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
            )}
          </div>
        </div>
        <h3 className="projects__card--header__title heading--3">
          <a
            href={
              noWebsiteLink() ? findGithubRepo(project) : findWebsite(project)
            }
            target="_blank"
            aria-label={`Go to the ${project} website or GitHub repository`}
          >
            {project}
          </a>
        </h3>
        <p className="projects__card--header__text paragraph paragraph-sm">
          {findDescription(project)}
        </p>
      </header>
      <footer className="projects__card--footer mt-sm">
        {findTechList(project)}
      </footer>
    </div>
  );
}

export default Card;
