import "../styles/hero.css";

function Hero({ theme }) {
  return (
    <main
      id="home"
      className=" ml-2   py-12 mt-8 w-[95vw] text-7xl sm:text-8xl sm:py-20 lg:text-9xl lg:ml-5 eagle text-black/40  overflow-hidden relative mb-24 dark:text-white/30"
    >
      <div>
        <p className="move-to-right relative ">Junior</p>
      </div>
      <div>
        <p className="move-to-right2 relative z-10">Fullstack</p>
      </div>
      <div>
        <p className="move-to-right z-10">Web developer</p>
      </div>
      <div className="absolute -top-10 -right-10 z-0 aspect-square w-[70vw] sm:-top-20 sm:w-[70vw] md:-top-30 md:w-[66vw] lg:-top-30 lg:w-[55vw] bird">
        <img
          src={
            theme === "light"
              ? "/vecteezy_ai-generated-beautiful-flying-dove-isolated-on-a-transparent_35878518.png"
              : "/—Pngtree—majestic red-tailed hawk soaring through_23466417.png"
          }
          alt={theme === "light" ? "Dove in flight" : "Hawk in flight"}
          className="h-full w-full object-contain sm:opacity-70 drop-shadow-black/60 drop-shadow-2xl duration-500"
        />
      </div>
    </main>
  );
}

export default Hero;
