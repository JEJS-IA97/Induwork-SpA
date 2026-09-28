import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BsCart,
    BsCheckLg,
    BsStarFill,
} from "react-icons/bs";
import { slugify } from "../../utils/slugify";
import { useCart } from "../../context/CartContext";

const HomeCards = ({
    id,
    imagen,
    nombre,
    subnombre,
    precio,
    rating,
    reviewsCount,
    categoria,
    slug,
}) => {
    const { addToCart } = useCart();
    const [agregado, setAgregado] = useState(false);

    const precioFormateado =
        typeof precio === "number"
            ? precio.toLocaleString("es-CL", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })
            : "Consultar";

    const productSlug = slug || slugify(nombre);
    const categorySlug = categoria ? slugify(categoria) : null;

    const productUrl = categorySlug
        ? `/tienda/${categorySlug}/${productSlug}`
        : `/tienda/${productSlug}`;

    const handleAddToCart = () => {
        addToCart({
            id,
            imagen,
            nombre,
            subnombre,
            precio,
            rating,
            reviewsCount,
            categoria,
            slug: productSlug,
        });

        setAgregado(true);

        window.setTimeout(() => {
            setAgregado(false);
        }, 1200);
    };

    return (
        <div className="flex h-[380px] w-full flex-col overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-xl dark:bg-[#181818] dark:text-white">
            <Link
                to={productUrl}
                className="group flex min-h-0 flex-1 flex-col"
                aria-label={`Ver ${nombre}`}
            >
                <div className="h-[232px] w-full shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
                    <img
                        src={imagen}
                        alt={nombre}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="mb-1 mt-3 flex flex-col">
                    <h4
                        className="line-clamp-1 text-base font-bold text-gray-900 dark:text-white"
                        title={nombre}
                    >
                        {nombre}
                    </h4>

                    <p className="line-clamp-1 text-base text-gray-500 dark:text-gray-400">
                        {subnombre || "Sin subnombre disponible."}
                    </p>
                </div>
            </Link>

            <div className="mt-auto flex items-end justify-between pt-2">
                <div>
                    <p className="text-lg font-bold text-[#f59a26]">
                        ${precioFormateado}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <BsStarFill
                            className="text-amber-400"
                            size={12}
                            aria-hidden="true"
                        />

                        <span>{rating || 0}</span>
                        <span>({reviewsCount || 0})</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleAddToCart}
                    aria-label={
                        agregado
                            ? `${nombre} agregado al carrito`
                            : `Agregar ${nombre} al carrito`
                    }
                    title={
                        agregado
                            ? "Producto agregado"
                            : "Agregar al carrito"
                    }
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-sm transition-all duration-200 active:scale-95 ${
                        agregado
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-[#f59a26] hover:bg-[#d8821a]"
                    }`}
                >
                    {agregado ? (
                        <BsCheckLg
                            size={17}
                            aria-hidden="true"
                        />
                    ) : (
                        <BsCart
                            size={18}
                            aria-hidden="true"
                        />
                    )}
                </button>
            </div>
        </div>
    );
};

export default HomeCards;