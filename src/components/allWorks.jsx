import work from "../Data/work";
import "../styles/neumorphism.css";

function AllWorks() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 md:p-6">
      {work.map((w) => {
        return (
          <div
            className="inside rounded-2xl p-5 flex flex-col gap-5"
            key={w.id}
          >
            {/* Project name */}
            <div>
              <h2 className="eagle text-black/70 outside-box px-5 py-3 w-fit min-w-40 rounded-2xl text-2xl text-center hover:text-red-600">
                <p className="">{w.name}</p>
              </h2>
            </div>

            {/* Project image */}
            <div className="w-full rounded-2xl Shadow">
              <img
                className="w-full aspect-video object-cover rounded-2xl"
                src={w.image}
                alt={w.name}
              />
            </div>

            {/* Project description */}
            <div>
              <p className="eagle-t text-lg leading-7 text-black/70">
                {w.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {w.stack.map((tech) => (
                <span
                  key={tech.name}
                  className=" eagle inside rounded-xl px-3 py-1.5 text-sm text-center text-black/60  my-4"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Demo button */}
            <div className="mt-auto pt-2">
              <button className="p-3 outside-btn rounded-2xl block mx-auto eagle text-black/70 hover:scale-110 duration-700 ">
                Click to See demo
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default AllWorks;
