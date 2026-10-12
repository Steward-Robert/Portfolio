import "../styles/hero.css";

function Hero() {
  return (
    <main className=" ml-2   py-12 mt-8 w-[95vw] text-7xl sm:text-8xl sm:py-20 lg:text-9xl lg:ml-5 eagle text-black/40  overflow-hidden relative mb-24">
      <div>
        <p className="move-to-right relative z-10">Junior</p>
      </div>
      <div>
        <p className="move-to-right2 relative z-10">Fullstack</p>
      </div>
      <div>
        <p className="move-to-right text">Web developer</p>
      </div>
      <div className=" w-[70vw] absolute -top-10 -right-10 z-0 sm:-top-20 sm:w-[70vw] md:-top-30 md:w-[66vw] lg:-top-30 lg:w-[55vw] bird">
        <img
          src="vecteezy_ai-generated-beautiful-flying-dove-isolated-on-a-transparent_35878518.png"
          className="w-full h-full sm:opacity-70 object-cover drop-shadow-black/60 drop-shadow-2xl "
        />
      </div>
    </main>
  );
}

export default Hero;
