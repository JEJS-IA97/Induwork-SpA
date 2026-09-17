import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import NavRoutes from "../../components/layout/NavRoutes";
import Footer from "../../components/layout/Footer";

import ProductGallery from "../../components/catalog/ProductGallery";
import ProductInfo from "../../components/catalog/ProductInfo";
import ProductSpecifications from "../../components/catalog/ProductSpecifications";
import ProductDescription from "../../components/catalog/ProductDescription";
import ProductReviews from "../../components/catalog/ProductReviews";

import data from "../../data/data.json";

const ProductPage = ({ darkMode, setDarkMode }) => {
    const { slug } = useParams();

    const product = useMemo(() => {
        return data.find((item) => {
            const itemSlug =
                item.slug ||
                item.nombre
                    ?.normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-$/, "");

            return itemSlug === slug;
        });
    }, [slug]);

    if (!product) {
        return (
            <div className="flex min-h-screen flex-col bg-[#efefef] text-black dark:bg-zinc-950 dark:text-white">
                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <div className="pt-[130px]">
                    <NavRoutes />
                </div>

                <main className="flex flex-1 items-center justify-center px-6 py-20">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">
                            Producto no encontrado
                        </h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-400">
                            El producto solicitado no existe o ya no está disponible.
                        </p>

                        <Link
                            to="/tienda"
                            className="mt-6 inline-flex rounded-md bg-[#f59a26] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d8821a]"
                        >
                            Volver a la tienda
                        </Link>
                    </div>
                </main>

                <Footer darkMode={darkMode} />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className="pt-[80px]">
                <NavRoutes />
            </div>

            <main className="flex-1 px-6 py-8 md:px-[60px] md:py-10">
                <div className="mx-auto max-w-[1500px]">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                        <Link
                            to="/"
                            className="transition hover:text-[#f59a26]"
                        >
                            Inicio
                        </Link>

                        <span>/</span>

                        <Link
                            to="/tienda"
                            className="transition hover:text-[#f59a26]"
                        >
                            Tienda
                        </Link>

                        {product.categoria && (
                            <>
                                <span>/</span>
                                <Link
                                    to={`/tienda/${product.categoria}`}
                                    className="capitalize transition hover:text-[#f59a26]"
                                >
                                    {product.categoria.replaceAll(
                                        "-",
                                        " "
                                    )}
                                </Link>
                            </>
                        )}

                        <span>/</span>

                        <span className="font-medium text-gray-700 dark:text-gray-200">
                            {product.nombre}
                        </span>
                    </nav>

                    <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        <ProductGallery product={product} />

                        <ProductInfo product={product} />
                    </section>

                    <section className="mt-12">
                        <ProductDescription product={product} />
                        <ProductSpecifications
                            specifications={product.especificaciones}
                        />
                        <ProductReviews product={product} />
                    </section>
                </div>
            </main>

            <Footer darkMode={darkMode} />
        </div>
    );
};

export default ProductPage;