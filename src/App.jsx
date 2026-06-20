import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./App.css";
import CursorDot from "./components/CursorDot";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <CursorDot />
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="work">
        <Work />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
