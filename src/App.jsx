import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Email from "./components/Email";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainNavigation from "./components/MainNavigation";
import Projects from "./components/Projects";
import Social from "./components/Social";

function App() {
  return (
    <>
      <MainNavigation />
      <div className="container__sub">
        <Social />
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
    </>
  );
}

export default App;
