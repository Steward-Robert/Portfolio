import { ArrowUpRight, ArrowUp } from "lucide-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="mt-24 px-5 pb-6 pt-12 sm:px-10 lg:px-16 outside rounded-2xl eagle-t">
      <div className="mx-auto max-w-7xl inside rounded-2xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 rounded-3xl p-7 sm:p-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="#home"
              className="inline-block text-3xl font-bold tracking-wider"
            >
              <p className="eagle text-black/80">
                WARD
                <span className="text-red-600 text-3xl font-bold ">࿐</span>
              </p>
            </a>

            <p className="max-w-xs text-sm leading-7 text-black/60">
              Junior Full-Stack Developer passionate about building modern,
              interactive, and meaningful digital experiences.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <p className="text-black/70 text-lg">Open to opportunities </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-black/70">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-4 text-sm ">
              <a
                href="#home"
                className="transition-colors hover:text-violet-500"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-violet-500"
              >
                About Me
              </a>

              <a
                href="#works"
                className="transition-colors hover:text-violet-500"
              >
                My Works
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-violet-500"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-7 text-black/70">
              Have a project in mind or an opportunity to share? Let's talk.
            </p>

            <p className="group inline-flex items-center gap-2  font-medium transition-colors hover:text-violet-500 text-xl">
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </p>

            <div className="flex gap-5 inside items-center p-4 rounded-2xl">
              <div className=" flex">
                <a
                  href="https://github.com/Steward-Robert"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 drop-shadow-sm drop-shadow-black"
                >
                  <img src="/github.png" className="opacity-80" />
                </a>
              </div>

              <div className=" flex">
                <a
                  href="https://wa.me/50948685845"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 drop-shadow-md drop-shadow-black"
                >
                  <img src="/whatsapp.png" className="opacity-80" />
                </a>
              </div>

              <div className=" flex">
                <a
                  href="mailto:wardremotejobs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mail"
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 drop-shadow-sm drop-shadow-black"
                >
                  <img src="/email.png" className="opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-500/15 pt-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} WARD. All rights reserved.</p>

          <p>
            Designed & built with care<span className="text-violet-500">.</span>
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:text-violet-500"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
