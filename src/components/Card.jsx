import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

function Card({ project }) {
  if (project === "nexter") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/Nexter"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              <a
                href="https://nexter-jarobles.netlify.app"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a href="https://nexter-jarobles.netlify.app" target="_blank">
              Nexter
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Nexter can help you find a sweet home to live. The purpose of this
            project was to design a webpage using grid implemantation
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">HTML5</li>
            <li className="projects__card--footer__item">SCSS</li>
            <li className="projects__card--footer__item">JavaScript</li>
            <li className="projects__card--footer__item">Node</li>
            <li className="projects__card--footer__item">Netlify</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "trillo") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/Trillo"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              <a
                href="https://trillo-jarobles.netlify.app"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a href="https://trillo-jarobles.netlify.app" target="_blank">
              Trillo
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            All-in-one booking app. The purpose of this app was to design a
            webpage using flexbox implemantation
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">HTML5</li>
            <li className="projects__card--footer__item">SCSS</li>
            <li className="projects__card--footer__item">JavaScript</li>
            <li className="projects__card--footer__item">Node</li>
            <li className="projects__card--footer__item">Netlify</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "natours") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/Natours-Project"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              <a
                href="https://natours-jarobles.netlify.app"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a href="https://natours-jarobles.netlify.app" target="_blank">
              Natours
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Exciting tours for adventurous people. The purpose of this app was
            to design a webpage using float implemantation
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">HTML5</li>
            <li className="projects__card--footer__item">SCSS</li>
            <li className="projects__card--footer__item">JavaScript</li>
            <li className="projects__card--footer__item">Node</li>
            <li className="projects__card--footer__item">Netlify</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "omnifood") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/Omnifood"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              <a
                href="https://jrobles-omnifood.netlify.app/"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a href="https://jrobles-omnifood.netlify.app/" target="_blank">
              Omnifood
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Omnifood is an AI-powered food subscription. The purpose of this app
            was to design a webpage using different techniques
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">HTML5</li>
            <li className="projects__card--footer__item">CSS3</li>
            <li className="projects__card--footer__item">JavaScript</li>
            <li className="projects__card--footer__item">Node</li>
            <li className="projects__card--footer__item">Netlify</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "forkify") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/forkify-app"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              <a
                href="https://forkify-jrobles.netlify.app"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a href="https://forkify-jrobles.netlify.app" target="_blank">
              Forkify
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Recipe application with custom recipe uploads. The purpose of this
            app was to practice MVC arquitecture in JavaScript
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">HTML5</li>
            <li className="projects__card--footer__item">SCSS</li>
            <li className="projects__card--footer__item">JavaScript</li>
            <li className="projects__card--footer__item">Node</li>
            <li className="projects__card--footer__item">Netlify</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "twitter") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/Twitter-Style-Services"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              {/* <a
                href="https://jrobles-omnifood.netlify.app/"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a> */}
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a
              href="https://github.com/jrobles0717/Twitter-Style-Services"
              target="_blank"
            >
              Twitter Style Services
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Twitter style services have similar functions and implemantation as
            Twitter. The purpose was to get, create, update, and delete data
            using SQL
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">Python</li>
            <li className="projects__card--footer__item">Flask</li>
            <li className="projects__card--footer__item">PostgreSQL</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "guerrilla") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/jrobles0717/Guerrilla-App"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              {/* <a
                href="https://jrobles-omnifood.netlify.app/"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a> */}
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a
              href="https://github.com/jrobles0717/Guerrilla-App"
              target="_blank"
            >
              Guerrilla
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Guerrilla is a mobile application which allows you to create sport
            events and play with those who added to the list
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">React Native</li>
            <li className="projects__card--footer__item">Redux</li>
            <li className="projects__card--footer__item">Expo</li>
            <li className="projects__card--footer__item">Yarn</li>
            <li className="projects__card--footer__item">SQLite</li>
          </ul>
        </footer>
      </div>
    );
  }
  if (project === "capstone") {
    return (
      <div className="projects__card">
        <header className="projects__card--header mb-sm">
          <div className="projects__card--header__top">
            <div className="projects__card--header__top--left">
              <FiFolder className="projects__card--header__top--icon projects__card--header__top--icon__left" />
            </div>
            <div className="projects__card--header__top--right">
              <a
                href="https://github.com/capstone-2022"
                target="_blank"
                className="icon"
              >
                <FiGithub className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a>
              {/* <a
                href="https://jrobles-omnifood.netlify.app/"
                target="_blank"
                className="icon"
              >
                <FiExternalLink className="projects__card--header__top--icon projects__card--header__top--icon__right" />
              </a> */}
            </div>
          </div>
          <h3 className="projects__card--header__title heading--3">
            <a href="https://github.com/capstone-2022" target="_blank">
              AgroHub
            </a>
          </h3>
          <p className="projects__card--header__text paragraph paragraph-sm">
            Allow individual farmers and small organizations to grow
            economically and scale as much as they can by selling their products
            via the Internet
          </p>
        </header>
        <footer className="projects__card--footer mt-sm">
          <ul className="projects__card--footer__list">
            <li className="projects__card--footer__item">React</li>
            <li className="projects__card--footer__item">CSS3</li>
            <li className="projects__card--footer__item">Java</li>
            <li className="projects__card--footer__item">PostgreSQL</li>
            <li className="projects__card--footer__item">Heroku</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Card;
