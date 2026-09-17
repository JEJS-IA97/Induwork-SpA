import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsZoomIn } from "react-icons/bs";

const ProductGallery = ({ product }) => {
    const images =
        product.imagenes?.length > 0
            ? product.imagenes
            : product.imagen
                ? [product.imagen]
                : [];

    const [selectedImage, setSelectedImage] = useState(0);

    if (images.length === 0) {
        return (
            <div className="flex h-[500px] items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-900">
                <span className="text-sm text-gray-500">
                    Imagen no disponible
                </span>
            </div>
        );
    }

    const previousImage = () => {
        setSelectedImage((current) =>
            current === 0 ? images.length - 1 : current - 1
        );
    };

    const nextImage = () => {
        setSelectedImage((current) =>
            current === images.length - 1 ? 0 : current + 1
        );
    };

    return (
        <div className="flex gap-4">
            <div className="hidden w-[76px] flex-col gap-3 sm:flex">
                {images.map((image, index) => (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        className={`flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-md border bg-white dark:bg-zinc-900 ${
                            selectedImage === index
                                ? "border-[#f59a26] ring-1 ring-[#f59a26]"
                                : "border-gray-200 dark:border-zinc-800"
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                    >
                        <img
                            src={image}
                            alt={`${product.nombre} - vista ${index + 1}`}
                            className="h-full w-full object-contain"
                        />
                    </button>
                ))}
            </div>

            <div className="relative flex min-h-[500px] flex-1 items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-zinc-900">
                <img
                    src={images[selectedImage]}
                    alt={`${product.nombre} - imagen principal`}
                    className="max-h-[500px] w-full object-contain"
                />

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Imagen anterior"
                            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white dark:bg-zinc-800/90 dark:text-white"
                        >
                            <BsChevronLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Siguiente imagen"
                            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white dark:bg-zinc-800/90 dark:text-white"
                        >
                            <BsChevronRight size={18} />
                        </button>
                    </>
                )}

                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs text-gray-700 shadow dark:bg-zinc-800/90 dark:text-gray-200">
                    <BsZoomIn />
                    <span>
                        {selectedImage + 1} / {images.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;