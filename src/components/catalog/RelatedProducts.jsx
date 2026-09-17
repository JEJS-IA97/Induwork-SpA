import ShopCards from "./ShopCards";

const RelatedProducts = ({ products, currentProductId }) => {
    const relatedProducts = products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 4);

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="border-t border-gray-200 py-10 dark:border-zinc-800">
            <h2 className="mb-6 text-2xl font-bold">
                También te puede interesar
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <ShopCards
                        key={product.id}
                        imagen={product.imagen}
                        nombre={product.nombre}
                        subnombre={product.subnombre}
                        descripcion={product.descripcion}
                        precio={product.precio}
                        rating={product.rating}
                        reviewsCount={product.reviewsCount}
                    />
                ))}
            </div>
        </section>
    );
};

export default RelatedProducts;