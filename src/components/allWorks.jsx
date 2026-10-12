import work from "../Data/work";
import "../styles/neumorphism.css";
import { ArrowUpRight } from "lucide-react";

function AllWorks() {
  return (
    <div className="grid grid-cols-1 gap-6 p-0 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
      {work.map((w) => {
        return (
          <article
            className="portfolio-card flex flex-col gap-5 rounded-2xl p-5 sm:p-6"
            key={w.id}
          >
            <h3 className="eagle-t text-2xl leading-snug text-black/75">
              {w.name}
            </h3>
            <div className="portfolio-project-image w-full overflow-hidden rounded-xl">
              <img
                className="aspect-video w-full rounded-xl object-cover"
                src={w.image}
                alt={w.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="min-h-0 flex-1 text-base leading-7 text-black/65">
              <p className="eagle-t text-lg"> {w.description}</p>
            </p>
            <ul
              className="flex flex-wrap gap-2.5"
              aria-label={`${w.name} technologies`}
            >
              {w.stack.map((tech) => (
                <li
                  key={tech.name}
                  className="inside rounded-xl px-3 py-1.5 text-sm text-black/65 eagle"
                >
                  {tech.name}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="outside-btn mt-1 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl px-4 py-3 font-semibold text-black/70 transition duration-300 hover:-translate-y-0.5 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-reduce:transform-none motion-reduce:transition-none eagle text-xl"
            >
              Click to see demo
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default AllWorks;
