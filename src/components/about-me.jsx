import { useEffect, useState } from "react";
import "../styles/neumorphism.css";

function About() {
  const frontend = [
    { id: 1, name: "HTML", image: "/text.png" },
    { id: 2, name: "CSS", image: "/css-3.png" },
    { id: 3, name: "TAILWIND CSS", image: "/Tailwind CSS.png" },
    { id: 4, name: "JAVASCRIPT", image: "/js.png" },
    { id: 5, name: "REACT", image: "/physics.png" },
  ];

  const backend = [
    { id: 6, name: "NODE JS", image: "/nodejs.png" },
    { id: 7, name: "EXPRESS", image: "/Express.png" },
    { id: 8, name: "SOCKET.IO", image: "/Socket.io.png" },
    { id: 9, name: "SUPABASE", image: "/supabase.png" },
    { id: 10, name: "POSTGRESQL", image: "/elephant.png" },
  ];

  const tools = [
    { id: 11, name: "GIT", image: "/git.png" },
    { id: 12, name: "GITHUB", image: "/github.png" },
  ];

  const text =
    "I'm Ward, a junior full-stack web developer focused on creating modern, responsive, and user-friendly applications. I enjoy turning ideas into practical solutions, developing intuitive interfaces, and building reliable backend systems. I'm constantly improving my skills to write cleaner code and create better digital experiences.";

  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".about-section");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    const timer = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [startTyping]);

  return (
    <section
      id="about"
      className="about-section w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto py-10 inside rounded-2xl p-3"
    >
      {/* Label */}
      <div className="mb-8">
        <span className="text-xl outside-box inline-block rounded-xl px-5 py-2 font-semibold tracking-[0.2em] text-black/60 hover:text-red-600 eagle">
          ABOUT ME
        </span>
      </div>

      {/* Typewriter effect */}
      <p
        className="eagle-t mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700"
        aria-label={text}
      >
        {displayedText}
        {startTyping && displayedText.length < text.length && (
          <span className="typing-cursor" aria-hidden="true">
            |
          </span>
        )}
      </p>

      {/* Areas of interest */}

      <div className="w-[85%] mx-auto mt-5 grid-cols-1 grid gap-8 sm:grid-cols-2 sm:w-[90%] md:grid-cols-2 lg:grid-cols-3 lg:w-[98%]">
        <div className=" inside text-center rounded-2xl py-2.5">
          <p className="outside-box w-[80%] mx-auto p-2 rounded-2xl mb-2 eagle text-black/70 mt-2.5">
            FRONTEND
          </p>
          {frontend.map((f) => {
            return (
              <div className="flex flex-col" key={f.id}>
                <div className="inside p-2 w-[70%] mx-auto rounded-2xl eagle text-black/60 text-sm my-1.5 flex gap-2 items-center">
                  <div className=" h-6 w-6 rounded-sm ">
                    <img
                      className="object-cover w-full rounded-sm h-full drop-shadow-xl drop-shadow-black"
                      src={f.image}
                    />
                  </div>
                  {f.name}
                </div>
              </div>
            );
          })}
        </div>

        <div className=" inside text-center rounded-2xl py-2.5">
          <p className="outside-box w-[80%] mx-auto p-2 rounded-2xl mb-2 eagle text-black/70 mt-2.5">
            BACKEND
          </p>
          {backend.map((b) => {
            return (
              <div className="flex flex-col" key={b.id}>
                <div className="inside p-2 w-[70%] mx-auto rounded-2xl eagle text-black/60 text-sm my-1.5 flex gap-3 items-center">
                  <div className=" h-6 w-6 rounded-sm">
                    <img
                      className="object-cover w-full rounded-full h-full drop-shadow-xl drop-shadow-black"
                      src={b.image}
                    />
                  </div>

                  <p> {b.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" inside text-center rounded-2xl py-2.5">
          <p className="outside-box w-[80%] mx-auto p-2 rounded-2xl mb-2 eagle text-black/70 mt-2.5">
            TOOLS
          </p>
          {tools.map((t) => {
            return (
              <div className="flex flex-col" key={t.id}>
                <div className="inside p-2 w-[70%] mx-auto rounded-2xl eagle text-black/60 text-sm my-1.5 flex gap-3 items-center">
                  <div className=" h-6 w-6 rounded-sm">
                    <img
                      className="object-cover w-full rounded-full h-full drop-shadow-xl drop-shadow-black"
                      src={t.image}
                    />
                  </div>
                  <p>{t.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
