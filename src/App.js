import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
