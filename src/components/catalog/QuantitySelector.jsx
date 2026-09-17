import { BsDash, BsPlus } from "react-icons/bs";

const QuantitySelector = ({ quantity, setQuantity, maxQuantity }) => {
    const decrease = () => {
        setQuantity((current) => Math.max(1, current - 1));
    };

    const increase = () => {
        setQuantity((current) =>
            Math.min(maxQuantity, current + 1)
        );
    };

    return (
        <div className="flex h-11 w-fit items-center rounded-md border border-gray-200 dark:border-zinc-700">
            <button
                type="button"
                onClick={decrease}
                disabled={quantity <= 1}
                aria-label="Disminuir cantidad"
                className="flex h-full w-11 items-center justify-center text-gray-600 transition hover:text-[#f59a26] disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-300"
            >
                <BsDash />
            </button>

            <span className="flex w-10 justify-center text-sm font-semibold">
                {quantity}
            </span>

            <button
                type="button"
                onClick={increase}
                disabled={quantity >= maxQuantity}
                aria-label="Aumentar cantidad"
                className="flex h-full w-11 items-center justify-center text-gray-600 transition hover:text-[#f59a26] disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-300"
            >
                <BsPlus />
            </button>
        </div>
    );
};

export default QuantitySelector;