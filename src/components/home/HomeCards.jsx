import { BsCart, BsStarFill } from "react-icons/bs";

const HomeCards = ({ imagen, nombre, subnombre, precio, rating, reviewsCount }) => {
    const precioFormateado =
        typeof precio === "number"
        ? precio.toLocaleString("es-CL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : "Consultar";

    return (
        <div className="flex h-[380px] w-full flex-col justify-between overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-xl dark:bg-[#181818] dark:text-white">
        <div className="h-[232px] w-full overflow-hidden rounded-md dark:bg-zinc-800">
            <img
            src={imagen}
            alt={nombre}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
        </div>

        <div className="mt-3 flex mb-1 flex-col">
            <h4 className="line-clamp-1 text-base font-bold text-gray-900 dark:text-white" title={nombre}>
            {nombre}
            </h4>
            <p className="line-clamp-1 text-md text-gray-500 dark:text-gray-400">
            {subnombre || "Sin subnombre disponible."}
            </p>
        </div>

        <div className="flex items-end justify-between pt-2 border-gray-100 dark:border-zinc-800">
            <div>
            <p className="text-lg font-bold text-[#f59a26]">${precioFormateado}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <BsStarFill className="text-amber-400" size={12} />
                <span>{rating || 0}</span>
                <span>({reviewsCount || 0})</span>
            </div>
            </div>

            <button
            aria-label="Agregar al carrito"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#f59a26] text-white transition-colors hover:bg-[#d8821a]"
            >
            <BsCart size={18} />
            </button>
        </div>
        </div>
    );
};

export default HomeCards;