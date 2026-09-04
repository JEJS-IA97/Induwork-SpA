import { useState, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavRoutes from "../components/NavRoutes";
import Footer from "../components/Footer";
import ShopCard from "../components/ShopCards";
import SortDropdown from "../components/filters/SortDropdown";
import FilterSidebar from "../components/filters/FilterSidebar";
import { BsGridFill, BsListUl } from "react-icons/bs";
import data from "../data.json";

const CategoryPage = ({ darkMode, setDarkMode }) => {
    const { categoria } = useParams();
    const [searchParams] = useSearchParams();
    const queryUrl = searchParams.get("busqueda") || "";
    const [orden, setOrden] = useState("destacados");
    const [busqueda, setBusqueda] = useState(queryUrl);
    const [viewMode, setViewMode] = useState("grid");

    const titulosCategorias = {
        "equipo-tactico": "Equipamiento Táctico",
        "seguridad": "Seguridad Industrial",
        "calzado": "Calzado",
        "vestimenta-industrial": "Vestimenta Industrial",
    };

    const tituloPagina = categoria
        ? titulosCategorias[categoria] || categoria.replace("-", " ")
        : "Equipamiento de Alto Rendimiento";

    const productosFiltrados = useMemo(() => {
        return data
        .filter((prod) => {
            const coincideCategoria = !categoria || prod.categoria === categoria;
            const coincideBusqueda =
            !busqueda ||
            prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            prod.subnombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
            prod.descripcion?.toLowerCase().includes(busqueda.toLowerCase());
            return coincideCategoria && coincideBusqueda;
        })
        .sort((a, b) => {
            if (orden === "menor-precio") return a.precio - b.precio;
            if (orden === "mayor-precio") return b.precio - a.precio;
            return 0;
        });
    }, [categoria, busqueda, orden]);

    return (
        <div className="flex min-h-screen flex-col bg-white text-black transition-colors dark:bg-zinc-950 dark:text-white">
            <Navbar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                busquedaGlobal={busqueda} 
                setBusquedaGlobal={setBusqueda} 
            />
            <div className="pt-[80px]">
                <NavRoutes />
            </div>

            <section className="w-full px-6 md:px-[60px] mb-12">
                <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden rounded-lg shadow-md">
                    <img
                        src="/images/banners/Contacto.jpg"
                        alt="Catálogo Induwork"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-8 sm:px-12 text-white">
                        <div className="h-[2px] w-[30px] bg-[#f59a26] mb-3" />
                        <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-wide">
                            {categoria ? tituloPagina : "Equipamiento de Alto Rendimiento"}
                        </h2>
                        <p className="mt-2 max-w-lg text-sm sm:text-base text-gray-200">
                            Soluciones certificadas en protección balística, seguridad industrial y vestimenta técnica para operaciones exigentes.
                        </p>
                    </div>
                </div>
            </section>

            <main className="w-full pl-[60px] pr-[60px]">
                
                <div className="flex items-center justify-end border-b border-gray-200 pb-6 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                        <SortDropdown orden={orden} setOrden={setOrden} />
                        
                        <button 
                            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                            className="p-2 text-gray-400 hover:text-gray-500 transition-colors hidden sm:block cursor-pointer"
                            title={`Cambiar a vista de ${viewMode === "grid" ? "lista" : "cuadrícula"}`}
                        >
                            {viewMode === "grid" ? <BsListUl size={20} /> : <BsGridFill size={20} />}
                        </button>
                    </div>
                </div>

                <section className="pb-24 pt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        
                        <FilterSidebar categoria={categoria} />

                        <div className="lg:col-span-3">
                            <div className={
                                viewMode === "grid" 
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" 
                                : "flex flex-col gap-6"
                            }>
                                {productosFiltrados.length > 0 ? (
                                    productosFiltrados.map((product) => (
                                        <ShopCard
                                            key={product.id}
                                            imagen={product.imagen}
                                            nombre={product.nombre}
                                            subnombre={product.subnombre}
                                            descripcion={product.descripcion}
                                            precio={product.precio}
                                            rating={product.rating}
                                            reviewsCount={product.reviewsCount}
                                            viewMode={viewMode}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full py-12 text-center">
                                        <p className="text-gray-500 dark:text-gray-400">No se encontraron productos para tu búsqueda.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default CategoryPage;