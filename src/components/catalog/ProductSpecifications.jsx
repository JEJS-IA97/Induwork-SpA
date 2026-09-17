const ProductSpecifications = ({ specifications }) => {
    if (!specifications || Object.keys(specifications).length === 0) {
        return null;
    }

    return (
        <section className="border-t border-gray-200 py-10 dark:border-zinc-800">
            <h2 className="mb-6 text-2xl font-bold">
                Especificaciones técnicas
            </h2>

            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-800">
                {Object.entries(specifications).map(
                    ([label, value], index) => (
                        <div
                            key={label}
                            className={`grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-3 ${
                                index % 2 === 0
                                    ? "bg-gray-50 dark:bg-zinc-900"
                                    : "bg-white dark:bg-zinc-950"
                            }`}
                        >
                            <span className="font-semibold text-gray-700 dark:text-gray-200">
                                {label}
                            </span>

                            <span className="sm:col-span-2 text-gray-600 dark:text-gray-400">
                                {value}
                            </span>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default ProductSpecifications;