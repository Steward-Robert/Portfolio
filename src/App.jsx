import Contact from "./components/contact";
import About from "./components/about-me";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import WorksField from "./components/works";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Intro />
      <main className="portfolio-content">
        <Header />
        <Hero />
        <About />
        <WorksField />
        <Contact />
      </main>
    </div>
  );
}

export default App;
