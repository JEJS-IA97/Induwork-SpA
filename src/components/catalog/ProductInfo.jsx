import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import ProductVariants from "./ProductVariants";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = ({ product }) => {
    const stock = Number.isFinite(product.stock)
        ? product.stock
        : 1;

    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});

    const hasStock = stock > 0;
    const hasRating =
        typeof product.rating === "number" &&
        product.rating > 0;

    const handleAddToCart = () => {
        const productToCart = {
            ...product,
            quantity,
            selectedOptions,
        };

        console.log("Producto agregado al carrito:", productToCart);
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                {product.marca && (
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#f59a26]">
                        {product.marca}
                    </p>
                )}

                <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {product.nombre}
                </h1>

                {product.subnombre && (
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                        {product.subnombre}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
                {hasRating ? (
                    <>
                        <div className="flex items-center gap-1 text-[#f59a26]">
                            <BsStarFill size={14} />
                            <span className="text-sm font-semibold">
                                {product.rating}
                            </span>
                        </div>

                        <span className="text-sm text-blue-600 dark:text-blue-400">
                            {product.reviewsCount || 0} valoraciones
                        </span>
                    </>
                ) : (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Aún no hay valoraciones
                    </span>
                )}

                {product.id && (
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                        SKU: {product.id}
                    </span>
                )}
            </div>

            <div className="border-y border-gray-200 py-5 dark:border-zinc-800">
                <span className="text-3xl font-semibold">
                    ${Number(product.precio || 0).toFixed(2)}
                </span>

                {product.precioAnterior && (
                    <span className="ml-3 text-sm text-gray-400 line-through">
                        ${Number(product.precioAnterior).toFixed(2)}
                    </span>
                )}
            </div>

            {product.descripcion && (
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {product.descripcion}
                </p>
            )}

            <ProductVariants
                product={product}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />

            <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold">
                    Cantidad
                </span>

                <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                    maxQuantity={stock}
                />
            </div>

            <div>
                {hasStock ? (
                    <span className="text-sm font-medium text-green-600">
                        Disponible
                    </span>
                ) : (
                    <span className="text-sm font-medium text-red-600">
                        Agotado
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!hasStock}
                    className="flex h-12 flex-1 items-center justify-center rounded-md bg-[#f59a26] px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#d8821a] disabled:cursor-not-allowed disabled:bg-gray-400 cursor-pointer"
                >
                    Agregar al carrito
                </button>

                <button
                    type="button"
                    disabled={!hasStock}
                    className="flex h-12 flex-1 items-center justify-center rounded-md border border-[#f59a26] px-6 text-sm font-semibold uppercase tracking-wide text-[#f59a26] transition hover:bg-[#f59a26] hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400 cursor-pointer"
                >
                    Comprar ahora
                </button>
            </div>

            <div className="grid gap-3 border-t border-gray-200 pt-5 text-sm dark:border-zinc-800">
                <div>
                    <span className="font-semibold">
                        Despacho:
                    </span>{" "}
                    Consulta disponibilidad y cobertura.
                </div>

                <div>
                    <span className="font-semibold">
                        Atención:
                    </span>{" "}
                    Asesoría especializada para tu compra.
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;