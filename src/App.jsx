import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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

// function App() {
//   return (
//     <Router>
//       <MainNavigation />
//       <div className="container__sub">
//         <Social direction="column" />
//         <Email />
//         <Routes>
//           <Route exact path="/" element={<Hero />} />
//           <Route path="/about" element={<AboutMe />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }
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
