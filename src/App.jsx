import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const TermsConditionsPage = lazy(() => import("./pages/legal/TycPage"));
const PrivacyPolicesPage = lazy(() => import("./pages/legal/PrivacyPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const NosotrosPage = lazy(() => import("./pages/company/AboutUs"));
const ServiciosPage = lazy(() => import("./pages/services/ServicesPage"));
const CategoryPage = lazy(() => import("./pages/catalog/CategoryPage"));

function App() {
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
        <div className="min-h-screen bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
            <Suspense
                fallback={
                    <div className="flex min-h-screen items-center justify-center">
                        <span>Cargando...</span>
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
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;