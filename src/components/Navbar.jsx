import { useState, useRef, useEffect } from "react";
import { BsPersonCircle, BsCart, BsFillSunFill, BsFillMoonFill, BsSearch } from "react-icons/bs";
import logo from "../assets/Logo.svg";
import logoB from "../assets/Logo-Blanco.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import data from "../data.json";

const Navbar = ({ darkMode, setDarkMode, busquedaGlobal, setBusquedaGlobal }) => {
  const [query, setQuery] = useState(busquedaGlobal || "");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isShopPage = location.pathname.startsWith("/tienda");
  const resultadosDropdown = query.trim() === "" ? [] : data.filter((prod) =>
    prod.nombre.toLowerCase().includes(query.toLowerCase()) ||
    prod.subnombre?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const valor = e.target.value;
    setQuery(valor);

    if (isShopPage && setBusquedaGlobal) {
      setBusquedaGlobal(valor); 
    } else {
      setIsOpen(true); 
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsOpen(false);
    navigate(`/tienda?busqueda=${encodeURIComponent(query)}`);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-[80px] w-full items-center justify-between bg-white px-10 text-black shadow-sm transition-colors dark:bg-[#0d0d0d] dark:text-white">
      <Link to="/" className="flex shrink-0 items-center">
        {darkMode ? (
          <img className="h-[55px] w-auto" src={logoB} alt="Logo Blanco" />
        ) : (
          <img className="h-[55px] w-auto" src={logo} alt="Logo" />
        )}
      </Link>

      <div className="relative flex max-w-[700px] flex-1 items-center justify-center px-6" ref={searchRef}>
        <form onSubmit={handleSearchSubmit} className="flex w-full items-center overflow-hidden rounded-md border bg-[#f5f5f5] dark:border-zinc-700 dark:bg-zinc-800">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => { if (!isShopPage && query.trim()) setIsOpen(true); }}
            placeholder="Buscar productos..."
            className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 h-[40px]" 
          />
          <button type="submit" className="flex items-center justify-center px-4 text-[#f59a26] transition-colors hover:text-black dark:text-[#f59a26] dark:hover:text-white cursor-pointer h-[40px]">
            <BsSearch size={18} />
          </button>
        </form>

        {!isShopPage && isOpen && resultadosDropdown.length > 0 && (
          <div className="absolute top-[50px] left-6 right-6 z-50 max-h-[350px] overflow-y-auto rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 dark:bg-zinc-900 dark:ring-zinc-700">
            <div className="p-2 divide-y divide-gray-100 dark:divide-zinc-800">
              {resultadosDropdown.slice(0, 5).map((prod) => (
                <Link 
                  key={prod.id} 
                  to="/tienda"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-zinc-800 cursor-pointer rounded transition-colors"
                >
                  <img src={prod.imagen} alt={prod.nombre} className="h-10 w-10 object-cover rounded" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">{prod.nombre}</span>
                    <span className="text-[11px] text-[#f59a26]">${prod.precio}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 p-2 text-center dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50">
              <button 
                onClick={handleSearchSubmit}
                className="text-xs font-bold uppercase text-[#f59a26] hover:underline cursor-pointer"
              >
                Ver todos los resultados ({resultadosDropdown.length})
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-16">
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="cursor-pointer text-xl transition-transform hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <BsFillSunFill className="text-white" /> : <BsFillMoonFill className="text-black" />}
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