import "../styles/neumorphism.css";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="h-17 w-[95vw] mx-auto rounded-xl sticky top-0 mt-2 z-50 outside flex items-center sm:w-[90vw] sm:mx-auto md:w-[80vw] md:mx-auto lg:w-[70vw] lg:mx-auto justify-between">
      <div className="flex gap-1">
        <h1 className="font-bold pl-3 text-3xl text-gray-800 eagle ">WARD</h1>
        <div>
          <span className="text-red-600 text-3xl font-bold ">࿐</span>
        </div>
      </div>
      <div>
        <button className="mr-7 p-3 outside-btn cursor-pointer rounded-2xl">
          <Menu className="hover:text-red-600 duration-500" />
        </button>
      </div>
    </header>
  );
}

export default Header;
