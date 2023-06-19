import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="">
        <About />
      </main>
    </>
  );
};

export default App;
