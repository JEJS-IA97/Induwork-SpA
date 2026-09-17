import { BsStarFill } from "react-icons/bs";

const ProductReviews = ({ product }) => {
    const reviews = product.reviews || [];
    const hasReviews = reviews.length > 0;

    return (
        <section className="border-t border-gray-200 py-10 dark:border-zinc-800">
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="text-2xl font-bold">
                        Valoraciones de clientes
                    </h2>

                    {product.rating > 0 ? (
                        <div className="mt-3 flex items-center gap-3">
                            <div className="flex items-center gap-1 text-[#f59a26]">
                                <BsStarFill />
                                <span className="font-semibold">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="text-sm text-gray-500">
                                {product.reviewsCount || 0} valoraciones
                            </span>
                        </div>
                    ) : (
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                            Este producto aún no tiene valoraciones.
                        </p>
                    )}
                </div>

                {hasReviews && (
                    <div className="flex flex-col gap-6">
                        {reviews.map((review) => (
                            <article
                                key={review.id || `${review.author}-${review.title}`}
                                className="border-t border-gray-200 pt-6 dark:border-zinc-800"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1 text-[#f59a26]">
                                        {Array.from(
                                            { length: review.rating || 0 },
                                            (_, index) => (
                                                <BsStarFill
                                                    key={index}
                                                    size={12}
                                                />
                                            )
                                        )}
                                    </div>

                                    <span className="text-sm font-semibold">
                                        {review.author}
                                    </span>
                                </div>

                                {review.title && (
                                    <h3 className="mt-2 font-semibold">
                                        {review.title}
                                    </h3>
                                )}

                                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    {review.comment}
                                </p>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductReviews;