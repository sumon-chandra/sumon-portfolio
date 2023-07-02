import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/ptojects/Projects";
import Skills from "./components/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
