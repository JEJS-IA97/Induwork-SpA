const ProductDescription = ({ product }) => {
    const features = product.caracteristicas || [];

    return (
        <section className="border-t border-gray-200 py-10 dark:border-zinc-800">
            <h2 className="mb-6 text-2xl font-bold">
                Descripción del producto
            </h2>

            <div className="max-w-4xl text-sm leading-7 text-gray-700 dark:text-gray-300">
                <p>
                    {product.descripcionCompleta ||
                        product.descripcion ||
                        "No hay una descripción detallada disponible para este producto."}
                </p>

                {features.length > 0 && (
                    <div className="mt-8">
                        <h3 className="mb-4 text-lg font-bold">
                            Características principales
                        </h3>

                        <ul className="flex flex-col gap-3">
                            {features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex gap-3"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59a26]" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductDescription;