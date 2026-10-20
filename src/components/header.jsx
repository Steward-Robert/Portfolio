import "../styles/neumorphism.css";
import { Plus, Moon, Sun } from "lucide-react";
import { useState } from "react";

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="h-17 w-[95vw] mx-auto rounded-xl sticky top-0 mt-2 z-50 outside flex items-center sm:w-[90vw] sm:mx-auto md:w-[80vw] md:mx-auto lg:w-[70vw] lg:mx-auto justify-between  duration-500">
      <div className="flex gap-1">
        <a
          href="#home"
          className="font-bold pl-3 text-3xl text-gray-800 eagle dark:text-white duration-500 "
        >
          WARD
        </a>
        <div>
          <span className="text-red-600 text-3xl font-bold ">࿐</span>
        </div>
      </div>

      <div className="flex gap-7 items-center">
        <div>
          <button
            className="cursor-pointer p-2 outside-btn rounded-2xl"
            onClick={toogle}
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>
        </div>
        <div
          className={
            open
              ? "sm:relative sm:p-0 sm:border-0 sm:bg-transparent sm:top-0 sm:flex sm:flex-row absolute top-20 right-2 flex flex-col gap-6 py-14 px-9 rounded-2xl justify-center duration-500 scale-100 bg-white/40 border-2 dark:bg-black/50 dark:border-red-600 border-white/70 backdrop-blur-2xl"
              : "scale-0 absolute top-20 right-2 sm:scale-100 sm:relative sm:p-0 sm:border-0 sm:bg-transparent sm:top-0 sm:flex sm:flex-row sm:gap-4 duration-500"
          }
        >
          <a
            className="outside-btn p-1 px-2 rounded-2xl eagle text-black/70 hover:text-red-700 duration-700 dark:text-white"
            href="#about"
          >
            About me
          </a>
          <a
            className="outside-btn p-1 px-2 rounded-2xl eagle text-black/70  hover:text-red-700 duration-700 dark:text-white "
            href="#works"
          >
            My works
          </a>
          <a
            className="outside-btn p-1 px-2 rounded-2xl eagle text-black/70 mr-7  hover:text-red-700 duration-700 dark:text-white"
            href="#contact"
          >
            contact
          </a>
        </div>

        <button
          className="mr-7 p-3 outside-btn cursor-pointer rounded-2xl sm:hidden lg:hidden "
          onClick={() => setOpen(!open)}
        >
          <Plus
            className={
              open
                ? "hover:text-red-600 duration-500 rotate-140 dark:text-red-700"
                : "hover:text-red-600 duration-500"
            }
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
