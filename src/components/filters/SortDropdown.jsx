import { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const SortDropdown = ({ orden, setOrden }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const opciones = [
        { id: "destacados", label: "Más destacados" },
        { id: "menor-precio", label: "Menor Precio" },
        { id: "mayor-precio", label: "Mayor Precio" }
    ];

    const opcionActual = opciones.find((o) => o.id === orden)?.label;

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort</span>
            <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex justify-center text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-white transition-colors"
            >
            {opcionActual}
            <BsChevronDown className="-mr-1 ml-1 h-4 w-4 shrink-0 text-gray-400 group-hover:text-gray-500 mt-0.5" />
            </button>
        </div>

        {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800 dark:ring-zinc-700">
            <div className="py-1">
                {opciones.map((opcion) => (
                <button
                    key={opcion.id}
                    onClick={() => {
                    setOrden(opcion.id);
                    setIsOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                    orden === opcion.id 
                        ? "bg-gray-100 font-bold text-gray-900 dark:bg-zinc-700 dark:text-white" 
                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-zinc-700"
                    }`}
                >
                    {opcion.label}
                </button>
                ))}
            </div>
            </div>
        )}
        </div>
    );
};

export default SortDropdown;