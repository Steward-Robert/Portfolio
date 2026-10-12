import { useEffect, useState } from "react";
import "../styles/intro.css";

function Intro() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  if (finished) return null;

  return (
    <div className="intro-overlay">
      <h1 className="intro-ward">
        {"WARD".split("").map((letter, index) => (
          <span key={letter} style={{ animationDelay: `${index * 0.3}s` }}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Intro;
