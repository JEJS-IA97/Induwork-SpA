const ProductVariants = ({
    product,
    selectedOptions,
    setSelectedOptions,
}) => {
    const opciones = product.opciones || product.options || {};

    const entries = Object.entries(opciones);

    if (entries.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            {entries.map(([name, values]) => (
                <div key={name} className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold capitalize">
                            {name}
                        </span>

                        {selectedOptions[name] && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {selectedOptions[name]}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {values.map((value) => {
                            const selected =
                                selectedOptions[name] === value;

                            return (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() =>
                                        setSelectedOptions((current) => ({
                                            ...current,
                                            [name]: value,
                                        }))
                                    }
                                    className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                                        selected
                                            ? "border-[#f59a26] bg-[#f59a26]/10 text-[#f59a26]"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-200"
                                    }`}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductVariants;