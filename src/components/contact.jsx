import "../styles/neumorphism.css";
import { Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section mx-auto mb-7 mt-20 w-[90vw] max-w-7xl rounded-2xl p-5 inside sm:p-8 lg:p-10"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
        <div>
          <p className="mb-4 inline-block rounded-xl px-5 py-2 text-sm font-semibold tracking-[0.2em] text-black/60 outside-box eagle dark:text-white">
            GET IN TOUCH
          </p>
          <h2
            id="contact-title"
            className="eagle-t text-3xl leading-tight text-black/75 sm:text-4xl dark:text-white/50"
          >
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-black/60 sm:text-lg dark:text-white/30">
            Whether you&apos;re hiring, have a project in mind, or just want to
            connect with a fellow developer, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="outside rounded-2xl p-5 sm:p-7 ">
          <form className="flex flex-col gap-5 eagle-t">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold tracking-wide text-black/70 dark:text-white"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                required
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="contact-field min-h-12 w-full rounded-xl px-4 py-3 text-base text-black/75 dark:placeholder:text-white/20 placeholder:text-black/40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold tracking-wide text-black/70 dark:text-white"
                htmlFor="text"
              >
                How can I help?
              </label>
              <textarea
                required
                rows={5}
                id="text"
                placeholder="Tell me a little about what you have in mind..."
                className="contact-field dark:text-white/10 w-full resize-y rounded-xl px-4 py-3 text-base leading-7 text-black/75 placeholder:text-black/40 dark:placeholder:text-white/20"
              />
            </div>
            <button
              type="submit"
              className="outside-btn inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl px-5 py-3 text-sm font-semibold tracking-wide text-black/70 transition duration-300 hover:-translate-y-0.5 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-reduce:transform-none motion-reduce:transition-none dark:text-white"
            >
              Send a message
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
