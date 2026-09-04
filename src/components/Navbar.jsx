import { BsPersonCircle, BsCart, BsFillSunFill, BsFillMoonFill, BsSearch } from "react-icons/bs";
import logo from "../assets/Logo.svg";
import logoB from "../assets/Logo-Blanco.svg";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex h-[80px] w-full items-center justify-between bg-white px-10 text-black shadow-sm transition-colors dark:bg-[#0d0d0d] dark:text-white">
      <div className="flex shrink-0 items-center">
        {darkMode ? (
            <img className="h-[55px] w-auto" src={logoB} alt="Logo Blanco" />
          ) : (
            <img className="h-[55px] w-auto" src={logo} alt="Logo" />
          )}
      </div>

      <div className="flex max-w-[700px] flex-1 items-center justify-center px-6">
        <div className="flex w-full items-center overflow-hidden rounded-md border bg-[#f5f5f5] dark:border-zinc-700 dark:bg-zinc-800">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 h-[40px]" 
          />
          <button className="flex items-center justify-center px-4 text-[#f59a26] transition-colors hover:text-black dark:text-[#f59a26] dark:hover:text-white cursor-pointer h-[40px]">
            <BsSearch size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-16">
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="cursor-pointer text-xl transition-transform hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <BsFillSunFill className="text-white" />
          ) : (
            <BsFillMoonFill className="text-black" />
          )}
        </button>

        <div className="flex cursor-pointer items-center gap-2 transition-transform hover:scale-105">
          <BsPersonCircle size={22} />
          <p className="text-sm font-medium">Usuario</p>
        </div>

        <button className="cursor-pointer text-xl transition-transform hover:scale-110">
          <BsCart size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;