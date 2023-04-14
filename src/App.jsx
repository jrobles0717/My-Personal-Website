import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Email from "./components/Email";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainNavigation from "./components/MainNavigation";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <>
      <MainNavigation />
      <div className="container__sub">
        <SocialMedia />
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
