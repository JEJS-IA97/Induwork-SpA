import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartProvider } from "./context/CartContext";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const TermsConditionsPage = lazy(() => import("./pages/legal/TycPage"));
const PrivacyPolicesPage = lazy(() => import("./pages/legal/PrivacyPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const NosotrosPage = lazy(() => import("./pages/company/AboutUs"));
const ServiciosPage = lazy(() => import("./pages/services/ServicesPage"));
const CategoryPage = lazy(() => import("./pages/catalog/CategoryPage"));
const ProductPage = lazy(() => import("./pages/catalog/ProductPage"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const CheckoutPage = lazy(() => import("./pages/checkout/CheckoutPage"));

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme === "dark";
        }

        return true;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <CartProvider>
            <div className="min-h-screen bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
                <ErrorBoundary>
                    <Suspense
                        fallback={
                            <div className="flex min-h-screen items-center justify-center bg-[#efefef] dark:bg-zinc-950">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Cargando...
                                </span>
                            </div>
                        }
                    >
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <HomePage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/terminos-y-condiciones"
                                element={
                                    <TermsConditionsPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/politica-de-privacidad"
                                element={
                                    <PrivacyPolicesPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/tienda"
                                element={
                                    <CategoryPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/tienda/:categoria"
                                element={
                                    <CategoryPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/tienda/:categoria/:slug"
                                element={
                                    <ProductPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/carrito"
                                element={
                                    <CartPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/contactanos"
                                element={
                                    <ContactPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/nosotros"
                                element={
                                    <NosotrosPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/servicios"
                                element={
                                    <ServiciosPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                            <Route
                                path="/checkout"
                                element={
                                    <CheckoutPage
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </CartProvider>
    );
}

export default App;