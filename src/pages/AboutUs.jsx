import Navbar from "../components/Navbar";
import NavRoutes from "../components/NavRoutes";
import Footer from "../components/Footer";
import { BsShieldCheck, BsAward, BsTools } from "react-icons/bs";
import HeroImagen from "/images/about-us/Nosotros-01.png";
import HeroImagen2 from "/images/about-us/Nosotros-02.png";

const NosotrosPage = ({ darkMode, setDarkMode }) => {
    const valores = [
        {
        icon: <BsShieldCheck size={24} />,
        titulo: "Seguridad Integral",
        descripcion: "Es el núcleo de todo lo que ofrecemos y nuestro compromiso innegociable con cada cliente."
        },
        {
        icon: <BsAward size={24} />,
        titulo: "Calidad",
        descripcion: "Seleccionamos rigurosamente productos diseñados para soportar las condiciones y entornos más exigentes."
        },
        {
        icon: <BsTools size={24} />,
        titulo: "Especialización",
        descripcion: "Conocemos profundamente los requerimientos técnicos de la protección laboral, táctica y de operaciones en campo abierto."
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-[#ffffff]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="pt-[80px]">
            <NavRoutes />
        </div>

        <section className="w-full px-6 md:px-[60px] mb-12">
            <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden rounded-lg shadow-md">
                <img
                src="/images/Contacto.jpg" 
                alt="Soporte Técnico Induwork"
                className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-8 sm:px-12 text-white">
                <div className="h-[2px] w-[30px] bg-[#f59a26] mb-3" />
                <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-wide">
                    Sobre Nosotros
                </h2>
                <p className="mt-2 max-w-lg text-sm sm:text-base text-gray-200">
                    Especialistas en soluciones integrales de seguridad y protección
                </p>
                </div>
            </div>
        </section>

        <section className="w-full px-6 md:px-[60px] mb-[40px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-lg bg-[#ffffff] p-6 sm:p-10 shadow-md dark:bg-[#181818]">

            <div className="lg:col-span-7 flex flex-col gap-4 text-sm leading-relaxed text-gray-700 dark:text-[#c3c4c3] text-justify">
                <p className="text-base text-black dark:text-[#ffffff] font-medium">
                    En <strong className="text-[#f59a26]">Induwork</strong>, somos especialistas en proveer soluciones integrales de seguridad, protección y equipamiento de alto rendimiento.
                </p>
                <p>
                    Entendemos que en sectores críticos —desde obras civiles y el trabajo industrial hasta operaciones de seguridad y actividades en terreno— contar con el equipo adecuado es vital.
                </p>
                <p>
                    Por ello, hemos consolidado un catálogo robusto y especializado que abarca indumentaria industrial, elementos de protección personal (EPP) y equipamiento táctico de primera línea. Desde chalecos de protección, botas tácticas y cascos, hasta sistemas de comunicación, iluminación y vestimenta de alta visibilidad, nuestro compromiso es dotar a los profesionales de las herramientas más confiables para que realicen su labor con total seguridad, confort y eficiencia.
                </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden rounded-md">
                    <img
                        src={darkMode ? HeroImagen2 : HeroImagen}
                        alt="Equipamiento Induwork"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            </div>
        </section>

        <main className="flex-1 w-full px-6 md:px-[60px] pb-[40px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            <div className="rounded-lg bg-[#ffffff] shadow-md dark:bg-[#181818] flex flex-col overflow-hidden">
                <div className="h-48 w-full overflow-hidden">
                    <img
                    src="/images/about-us/Mision.webp"
                    alt="Nuestra Misión"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <h2 className="text-xl font-bold uppercase tracking-wide">
                    Nuestra Misión
                    </h2>
                    <div className="flex flex-col gap-3 text-sm leading-relaxed text-gray-700 dark:text-[#c3c4c3] text-justify">
                    <p>
                        Proveer equipamiento de seguridad, protección laboral y táctica de la más alta calidad, garantizando la integridad y el rendimiento de los profesionales en sus entornos de trabajo.
                    </p>
                    <p>
                        Nos dedicamos a ofrecer soluciones duraderas y confiables para satisfacer las máximas exigencias de la industria, la construcción, los sectores de seguridad y las operaciones de campo.
                    </p>
                    </div>
                </div>
            </div>

                        <div className="rounded-lg bg-[#ffffff] shadow-md dark:bg-[#181818] flex flex-col overflow-hidden">
                <div className="h-48 w-full overflow-hidden">
                    <img
                    src="/images/about-us/Vision.webp"
                    alt="Nuestra Visión"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <h2 className="text-xl font-bold uppercase tracking-wide">
                    Nuestra Visión
                    </h2>
                    <div className="flex flex-col gap-3 text-sm leading-relaxed text-gray-700 dark:text-[#c3c4c3] text-justify">
                    <p>
                        Consolidarnos como el principal referente y aliado estratégico en el suministro de equipamiento de seguridad y protección integral.
                    </p>
                    <p>
                        Aspiramos a ser reconocidos por nuestra excelencia, la resistencia inquebrantable de nuestros productos y nuestra capacidad de anticipar y adaptarnos a las necesidades de resguardo, ya sea en la industria pesada, obras civiles, seguridad operativa o exploración en exteriores.
                    </p>
                    </div>
                </div>
            </div>

            </div>
        </main>

        <section className="w-full px-6 md:px-[60px] mb-16">
            <div className="mb-6 flex flex-col gap-1">
            <div className="h-[2px] w-[20px] bg-[#f59a26]" />
            <h2 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2">
                Nuestros Valores
            </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
                <div 
                key={index} 
                className="flex items-start gap-4 rounded-lg bg-[#ffffff] p-6 shadow-md transition-all hover:shadow-lg dark:bg-[#181818]"
                >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                    {valor.icon}
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold uppercase tracking-wide">
                    {valor.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-[#c3c4c3] text-justify">
                    {valor.descripcion}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </section>

        <Footer darkMode={darkMode} />
        </div>
    );
};

export default NosotrosPage;