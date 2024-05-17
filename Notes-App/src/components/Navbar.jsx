import { useEffect, useState } from "react";

function Navbar() {
  const [noteTheme, setnoteTheme] = useState(
    localStorage.getItem("notes-theme")
      ? localStorage.getItem("notes-theme")
      : "white"
  );

  useEffect(() => {
    localStorage.setItem("notes-theme", noteTheme);
    document.body.classList.remove("dark", "white");
    document.body.classList.add(noteTheme);
  }, [noteTheme]);

  function toggleTheme() {
    noteTheme === "dark" ? setnoteTheme("white") : setnoteTheme("dark");
  }

  return (
    <nav className="bg-transparent w-2/3 mx-auto">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/src/assets/icons8-note-48.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Notes
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              checked={noteTheme === "dark"}
              className="sr-only peer bg-black"
              onChange={toggleTheme}
            />
            <div className="w-11 h-6 bg-teal-50 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-dark after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
