import HeroImagen from "../assets/HeroBanner-01.jpg";
import HeroImagen2 from "../assets/HeroBanner-02.jpg";

const HeroBanner = ({ darkMode }) => {
    return (
        <div className="relative h-[500px] w-full overflow-hidden">
        <img
            src={darkMode ? HeroImagen2 : HeroImagen}
            alt="Hero Banner"
            className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center text-start text-black px-[60px] dark:text-white">
            <div className="w-[100px] h-[2px] bg-[#f59a26] mb-8"></div>
                <h1 className="max-w-3xl text-5xl font-bold tracking-tight uppercase">
                Equipo táctico
                    <span className="block">y balístico</span>
                </h1>
                <p className="mt-4 max-w-xl text-lg sm:text-xl">
                Calidad profesional para
                    <span className="block">quienes exigen lo mejor.</span>
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="/tienda"
                        className="rounded-md bg-[#f59a26] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#d8821a] uppercase"
                    >
                        Ver Productos
                    </a>
                    <a
                        href="/contactanos"
                        className="rounded-md border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-black backdrop-blur-sm transition-colors hover:bg-white  dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 uppercase"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;