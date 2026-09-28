import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BsCart,
    BsCheckLg,
    BsStarFill,
} from "react-icons/bs";
import { slugify } from "../../utils/slugify";
import { useCart } from "../../context/CartContext";

const ShopCard = ({
    id,
    imagen,
    nombre,
    subnombre,
    descripcion,
    precio,
    rating,
    reviewsCount,
    categoria,
    slug,
    viewMode = "grid",
}) => {
    const { addToCart } = useCart();
    const [agregado, setAgregado] = useState(false);

    const precioFormateado =
        typeof precio === "number"
            ? precio.toLocaleString("es-CL", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
              })
            : "Consultar";

    const isList = viewMode === "list";
    const puntuacion = rating || 0;
    const productSlug = slug || slugify(nombre);
    const categorySlug = slugify(categoria);
    const productUrl = `/tienda/${categorySlug}/${productSlug}`;

    const handleAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();

        addToCart({
            id,
            imagen,
            nombre,
            subnombre,
            descripcion,
            precio,
            categoria,
            slug: productSlug,
        });

        setAgregado(true);

        window.setTimeout(() => {
            setAgregado(false);
        }, 1200);
    };

    return (
        <div
            className={`group relative flex justify-between overflow-hidden rounded-lg border border-transparent bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-[#181818] ${
                isList ? "h-48 flex-row" : "h-full flex-col"
            }`}
        >
            <Link
                to={productUrl}
                className={`flex min-w-0 flex-1 ${
                    isList ? "h-full flex-row" : "h-full flex-col"
                }`}
            >
                <div
                    className={`shrink-0 overflow-hidden bg-gray-100 dark:bg-zinc-800 ${
                        isList
                            ? "h-full w-48"
                            : "aspect-[4/5] w-full"
                    }`}
                >
                    <img
                        src={imagen}
                        alt={nombre}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div
                    className={`flex min-w-0 flex-1 flex-col justify-between ${
                        isList ? "p-6 pr-16" : "p-4 pb-14"
                    }`}
                >
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-start justify-between gap-4">
                            <h3
                                className={`line-clamp-1 font-bold text-gray-900 dark:text-white ${
                                    isList
                                        ? "text-lg"
                                        : "text-sm"
                                }`}
                                title={nombre}
                            >
                                {nombre}
                            </h3>

                            <p
                                className={`shrink-0 leading-none font-bold text-[#f59a26] ${
                                    isList
                                        ? "text-[28px]"
                                        : "text-[22px]"
                                }`}
                            >
                                ${precioFormateado}
                            </p>
                        </div>

                        <p className="line-clamp-1 text-xs text-gray-400 dark:text-gray-500">
                            {subnombre || " "}
                        </p>

                        <p
                            className={`text-sm text-gray-500 dark:text-gray-400 ${
                                isList
                                    ? "mt-2 line-clamp-2"
                                    : "mt-1 line-clamp-3"
                            }`}
                            title={descripcion}
                        >
                            {descripcion ||
                                "Sin descripción disponible."}
                        </p>
                    </div>

                    <div
                        className={`flex items-center border-gray-100 dark:border-zinc-800 ${
                            isList
                                ? "mt-4 pt-0"
                                : "mt-4 border-t pt-3"
                        }`}
                    >
                        <div className="flex items-center gap-1.5">
                            <div className="flex items-center gap-0.5">
                                {[
                                    "one",
                                    "two",
                                    "three",
                                    "four",
                                    "five",
                                ].map((starId, index) => {
                                    const esActiva =
                                        index <
                                        Math.round(puntuacion);

                                    return (
                                        <BsStarFill
                                            key={starId}
                                            size={12}
                                            className={
                                                esActiva
                                                    ? "text-amber-400"
                                                    : "text-gray-300 dark:text-zinc-700"
                                            }
                                        />
                                    );
                                })}
                            </div>

                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                ({reviewsCount || 0})
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

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
                className={`absolute flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-white shadow-sm transition-all duration-200 active:scale-95 ${
                    agregado
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-[#f59a26] hover:bg-[#d8821a]"
                } ${
                    isList
                        ? "bottom-6 right-6"
                        : "bottom-4 right-4"
                }`}
            >
                {agregado ? (
                    <BsCheckLg size={14} />
                ) : (
                    <BsCart size={14} />
                )}
            </button>
        </div>
    );
};

export default ShopCard;