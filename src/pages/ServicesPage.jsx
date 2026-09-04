import Navbar from "../components/Navbar";
import NavRoutes from "../components/NavRoutes";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ServiciosPage = ({ darkMode, setDarkMode }) => {
    const servicios = [
        {
        id: "01",
        titulo: "Equipamiento Táctico y Balístico",
        subtitulo: "Protección integral para fuerzas de orden y seguridad",
        descripcion: "Suministro especializado de indumentaria y accesorios de alto rendimiento. Equipamos a guardias, vigilantes, unidades VIP y equipos SWAT con la máxima resistencia operativa.",
        puntos: [
            "Cascos y chalecos balísticos / anticorte",
            "Uniformes tácticos, camisas, pantalones y traje formal VIP",
            "Accesorios: fundas para revólver, esposas y bastones retráctiles"
        ],
        icono: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        link: "/tienda/equipo-tactico",
        destacado: true
        },
        {
        id: "02",
        titulo: "Protección e Indumentaria Industrial",
        subtitulo: "Seguridad operativa para obras e industrias",
        descripcion: "Equipamos a tu personal de planta y terreno con elementos de protección personal (EPP) y herramientas para mantener la continuidad operativa bajo normativas vigentes.",
        puntos: [
            "Chalecos reflectantes de alta visibilidad y cascos industriales",
            "Linternas de alta potencia y linternas tácticas",
            "Equipos de radiocomunicación (Walkie-Talkies) de largo alcance"
        ],
        icono: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0T9 7.5M12 11t3-3.5" />
            </svg>
        ),
        link: "/tienda/seguridad",
        destacado: false
        },
        {
        id: "03",
        titulo: "Sistemas de Vigilancia y Tecnología",
        subtitulo: "Monitoreo y control de acceso profesional",
        descripcion: "Soluciones de videovigilancia y dispositivos de control para instalaciones corporativas, predios industriales y proyectos de seguridad privada.",
        puntos: [
            "Cámaras de seguridad (CCTV) e infraestructura de monitoreo",
            "Dispositivos de comunicación y control perimetral",
            "Asesoría B2B en cotizaciones por volumen y licitaciones"
        ],
        icono: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        link: "/contactanos",
        destacado: false
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="pt-[80px]">
            <NavRoutes />
        </div>

                <section className="w-full px-6 md:px-[60px] mb-12"> 
            <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden rounded-lg shadow-md ">
                <img
                src="/images/banners/Servicios.jpg" 
                alt="Soporte Técnico Induwork"
                className="absolute h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-8 sm:px-12 text-white">
                <div className="h-[2px] w-[30px] bg-[#f59a26] mb-3" />
                <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-wide">
                    Nuestros Servicios y Suministros
                </h2>
                <p className="mt-2 max-w-lg text-sm sm:text-base text-gray-200">
                    Equipamiento táctico balístico, protección industrial y soluciones tecnológicas de vigilancia adaptadas a las exigencias operativas en Chile.
                </p>
                </div>
            </div>
        </section>

        <main className="flex-1 w-full px-6 md:px-[60px] pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {servicios.map((s) => (
                <div
                key={s.id}
                className={`group relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                    s.destacado
                    ? "bg-gradient-to-b from-[#1c1c1c] to-[#111111] text-white shadow-xl ring-2 ring-[#f59a26] dark:from-[#1d1d1d] dark:to-[#121212]"
                    : "bg-white dark:bg-[#181818] shadow-md hover:shadow-xl dark:border dark:border-zinc-800"
                }`}
                >
                <span className="absolute top-4 right-6 text-6xl font-black text-gray-100 dark:text-zinc-800/50 group-hover:text-[#f59a26]/20 transition-colors pointer-events-none select-none">
                    {s.id}
                </span>

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                        s.destacado 
                        ? "bg-[#f59a26] text-white" 
                        : "bg-[#f59a26]/10 text-[#f59a26] dark:bg-[#f59a26]/20"
                    }`}>
                        {s.icono}
                    </div>
                    {s.destacado && (
                        <span className="rounded-full bg-[#f59a26]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f59a26]">
                        Especialidad Principal
                        </span>
                    )}
                    </div>

                    <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold uppercase tracking-wide">
                        {s.titulo}
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#f59a26]">
                        {s.subtitulo}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-[#c3c4c3] text-justify">
                        {s.descripcion}
                    </p>
                    </div>

                    <ul className="flex flex-col gap-2.5 pt-2 border-t border-gray-100 dark:border-zinc-800">
                    {s.puntos.map((p, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-[#f59a26] font-bold">✓</span>
                        <span>{p}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-zinc-800 relative z-10">
                    <Link
                    to={s.link}
                    className={`flex items-center justify-between w-full rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        s.destacado
                        ? "bg-[#f59a26] text-white hover:bg-[#d8821a]"
                        : "bg-gray-100 text-black hover:bg-[#f59a26] hover:text-white dark:bg-zinc-900 dark:text-white dark:hover:bg-[#f59a26]"
                    }`}
                    >
                    <span>Ver Catálogo / Cotizar</span>
                    <span>→</span>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </main>

        <section className="w-full px-6 md:px-[60px] pb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f59a26]">
                    Atención Corporativa
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    ¿Necesitas equipar a tu equipo de seguridad o empresa?
                </h3>
                <p className="max-w-xl text-sm text-gray-400">
                    Ofrecemos cotizaciones personalizadas por volumen, atención B2B y despacho prioritario en todo el territorio nacional.
                </p>
                </div>

                <Link
                to="/contactanos"
                className="shrink-0 rounded-xl bg-[#f59a26] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#d8821a] hover:scale-105"
                >
                Solicitar Cotización
                </Link>
            </div>
            </div>
        </section>

        <Footer darkMode={darkMode} />
        </div>
    );
};

export default ServiciosPage;