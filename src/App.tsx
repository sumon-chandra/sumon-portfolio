import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="">
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
