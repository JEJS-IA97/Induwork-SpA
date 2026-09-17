import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsDash } from "react-icons/bs";

const FilterSection = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6 dark:border-zinc-800">
        <h3 className="-my-3 flow-root">
            <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between bg-transparent py-3 text-sm text-gray-400 hover:text-gray-500  cursor-pointer"
            >
            <span className="font-medium text-gray-900 dark:text-white">{title}</span>
            <span className="ml-6 flex items-center">
                {isOpen ? <BsDash size={20} /> : <BsPlus size={20} />}
            </span>
            </button>
        </h3>
        
        {isOpen && (
            <div className="pt-6">
            <div className="space-y-4">
                {options.map((option, idx) => (
                <div key={idx} className="flex items-center">
                    <input
                    id={`filter-${title}-${idx}`}
                    name={`${title}[]`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#f59a26] focus:ring-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                    />
                    <label
                    htmlFor={`filter-${title}-${idx}`}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                    {option}
                    </label>
                </div>
                ))}
            </div>
            </div>
        )}
        </div>
    );
    };

    const FilterSidebar = ({ categoria }) => {
    return (
        <form className="hidden lg:block">
        <h3 className="sr-only">Categorías</h3>
        <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 dark:border-zinc-800 dark:text-gray-300">
            <li>
            <Link to="/tienda" className={!categoria ? "text-[#f59a26]" : ""}>Todas las Categorías</Link>
            </li>
            <li>
            <Link to="/tienda/equipo-tactico" className={categoria === "equipo-tactico" ? "text-[#f59a26]" : ""}>Equipo Táctico</Link>
            </li>
            <li>
            <Link to="/tienda/seguridad" className={categoria === "seguridad" ? "text-[#f59a26]" : ""}>Seguridad Industrial</Link>
            </li>
            <li>
            <Link to="/tienda/calzado" className={categoria === "calzado" ? "text-[#f59a26]" : ""}>Calzado</Link>
            </li>
            <li>
            <Link to="/tienda/vestimenta-industrial" className={categoria === "vestimenta-industrial" ? "text-[#f59a26]" : ""}>Vestimenta Industrial</Link>
            </li>
        </ul>

        <FilterSection title="Color" options={["Negro", "Beige", "Azul", "Marrón", "Verde"]} />
        <FilterSection title="Tallas" options={["XS", "S", "M", "L", "XL"]} />
        </form>
    );
};

export default FilterSidebar;