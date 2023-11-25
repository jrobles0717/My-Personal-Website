import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Container from "./components/Container";
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
  );
}

export default App;
