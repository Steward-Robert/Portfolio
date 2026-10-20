import Contact from "./components/contact";
import About from "./components/about-me";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import WorksField from "./components/works";
import "./styles/App.css";
import Footer from "./components/footer";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div id="top">
      <Intro />
      <main className="portfolio-content">
        <Header theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <About />
        <WorksField />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
