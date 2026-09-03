import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavRoutes = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [openDropdown, setOpenDropdown] = useState(null);

    const navLinks = [
        { name: "Inicio", path: "/" },
        {
        name: "Tienda",
        path: "/tienda",
        subLinks: [
            { name: "Seguridad", path: "/tienda/seguridad" },
            { name: "Calzado", path: "/tienda/calzado" },
            { name: "Equipo Táctico", path: "/tienda/equipo-tactico" },
            { name: "Equipo Balístico", path: "/tienda/equipo-balistico" },
        ],
        },
        {
        name: "Empresa",
        path: "/empresa",
        subLinks: [
            { name: "Sobre Nosotros", path: "/empresa/sobre-nosotros" },
            { name: "Servicios", path: "/servicios" },
            { name: "Términos y Condiciones", path: "/terminos-y-condiciones" },
            { name: "Políticas de Privacidad", path: "/politica-de-privacidad" },
        ],
        },
        { name: "Contáctanos", path: "/contactanos" },
    ];

    return (
        <div className="flex h-[50px] w-full items-center justify-center bg-white px-10 text-black shadow-sm transition-colors dark:bg-[#0d0d0d] dark:text-white">
        <div className="flex items-center gap-6 uppercase">
            {navLinks.map((link) => {
            const isActive =
                link.path === "/"
                ? currentPath === "/"
                : currentPath === link.path || currentPath.startsWith(`${link.path}/`);
            const hasSubLinks = link.subLinks && link.subLinks.length > 0;

            return (
                <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() => hasSubLinks && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                >
                <Link
                    to={link.path}
                    className={`relative transition-colors hover:text-[#f59a26] ${
                    isActive
                        ? "font-semibold text-[#f59a26] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#f59a26]"
                        : "text-black dark:text-white"
                    }`}
                >
                    {link.name}
                </Link>

                {hasSubLinks && openDropdown === link.name && (
                    <div className="absolute top-full left-0 z-50 pt-4">
                    <div className="flex w-52 flex-col rounded-md border border-gray-100 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        {link.subLinks.map((subLink) => (
                        <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#f59a26] dark:text-gray-200 dark:hover:bg-zinc-800 dark:hover:text-[#f59a26]"
                        >
                            {subLink.name}
                        </Link>
                        ))}
                    </div>
                    </div>
                )}
                </div>
            );
            })}
        </div>
        </div>
    );
};

export default NavRoutes;