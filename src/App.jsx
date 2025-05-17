import AboutMe from "./pages/AboutMe";
import AosInitializer from "./components/AosInitializer";
import Contact from "./pages/Contact";
import Email from "./components/Email";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import MainNavigation from "./components/MainNavigation";
import Projects from "./pages/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import Social from "./components/Social";

function App() {
  return (
    <AosInitializer>
      <Router>
        <MainNavigation />
        <div className="container__sub">
          <Social direction="column" />
          <Email />
          <main>
            <div className="container__content">
              <Hero />
              <AboutMe />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </AosInitializer>
  );
}

export default App;
