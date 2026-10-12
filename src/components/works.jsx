import "../styles/neumorphism.css";
import AllWorks from "./allWorks";

function WorksField() {
  return (
    <main className="about-section w-[95vw] mx-auto  py-10 inside rounded-2xl p-3 mt-20">
      <p className="text-xl outside-box inline-block rounded-xl px-5 py-2 font-semibold tracking-[0.2em] text-black/60 w-50 mb-6 hover:text-red-600 eagle">
        MY WORKS
      </p>
      <AllWorks />
    </main>
  );
}

export default WorksField;
