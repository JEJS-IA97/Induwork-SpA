import { BsCart, BsStarFill } from "react-icons/bs";

const ShopCard = ({ imagen, nombre, subnombre, descripcion, precio, rating, reviewsCount, viewMode = "grid" }) => {
    const precioFormateado = typeof precio === "number"
        ? precio.toLocaleString("es-CL", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        : "Consultar";

    const isList = viewMode === "list";
    const puntuacion = rating || 0;

    return (
        <div className={`group flex justify-between bg-white dark:bg-[#181818] rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-transparent dark:border-zinc-800 cursor-pointer ${isList ? "flex-row h-48" : "flex-col h-full"}`}>
        
        <div className={`overflow-hidden bg-gray-100 dark:bg-zinc-800 shrink-0 ${isList ? "w-48 h-full" : "aspect-[4/5] w-full"}`}>
            <img
            src={imagen}
            alt={nombre}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className={`flex flex-1 flex-col justify-between ${isList ? "p-6" : "p-4"}`}>
            <div className="flex flex-col gap-1.5">
            <div className="flex items-start justify-between gap-4">
                <h3 className={`font-bold text-gray-900 dark:text-white line-clamp-1 ${isList ? "text-lg" : "text-sm"}`} title={nombre}>
                {nombre}
                </h3>
                <p className={`font-bold text-[#f59a26] shrink-0 leading-none ${isList ? "text-[28px]" : "text-[22px]"}`}>
                ${precioFormateado}
                </p>
            </div>
            
            <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">
                {subnombre || " "}
            </p>

            <p className={`text-sm text-gray-500 dark:text-gray-400 ${isList ? "line-clamp-2 mt-2" : "line-clamp-3 mt-1"}`} title={descripcion}>
                {descripcion || "Sin descripción disponible."}
            </p>
            </div>

            <div className={`flex items-center justify-between border-gray-100 dark:border-zinc-800 ${isList ? "pt-0 mt-4" : "pt-3 mt-4 border-t"}`}>
            
            <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => {
                    const esActiva = index < Math.round(puntuacion);
                    return (
                    <BsStarFill
                        key={index}
                        size={12}
                        className={esActiva ? "text-amber-400" : "text-gray-300 dark:text-zinc-700"}
                    />
                    );
                })}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                ({reviewsCount || 0})
                </span>
            </div>

            <button
                aria-label="Agregar al carrito"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#f59a26] text-white shadow-sm transition-colors hover:bg-[#d8821a] active:scale-95"
            >
                <BsCart size={14} />
            </button>
            </div>
        </div>
        </div>
    );
};

export default ShopCard;