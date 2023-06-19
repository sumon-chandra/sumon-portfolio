import pattern from "./assets/pattern.png";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${pattern})` }}
        className="min-h-screen w-full"
      >
        <h2>Hello World</h2>
      </section>
    </>
  );
};

export default App;
