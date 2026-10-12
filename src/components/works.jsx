import "../styles/neumorphism.css";
import AllWorks from "./allWorks";

function WorksField() {
  return (
    <section
      id="works"
      className="mx-auto mt-20 w-[95vw] max-w-7xl rounded-2xl p-5 py-10 inside sm:p-8 lg:p-10"
      aria-labelledby="works-title"
    >
      <div className="mb-8 sm:mb-10">
        <p className="mb-4 inline-block rounded-xl px-5 py-2 text-sm font-semibold tracking-[0.2em] text-black/60 outside-box eagle">
          MY WORKS
        </p>
        <h2
          id="works-title"
          className="eagle-t text-3xl leading-tight text-black/75 sm:text-4xl"
        >
          Here&apos;s some work I&apos;ve done
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-black/60 sm:text-lg ">
          A selection of projects that reflect what I enjoy building and the
          tools I use to bring ideas to life.
        </p>
      </div>
      <AllWorks />
    </section>
  );
}

export default WorksField;
