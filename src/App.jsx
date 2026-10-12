import Contact from "./components/contact";
import About from "./components/about-me";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import WorksField from "./components/works";
import "./styles/App.css";
import Footer from "./components/footer";

function App() {
  return (
    <div id="top">
      <Intro />
      <main className="portfolio-content">
        <Header />
        <Hero />
        <About />
        <WorksField />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
