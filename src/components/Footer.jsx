import logo from "../assets/logo.svg";
import logoB from "../assets/Logo-Blanco.svg";
import { BsFillTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";

const Footer = ({ darkMode }) => {
    return (
        <footer className="w-full bg-white p-[40px] pl-[60px] pr-[60px] text-black transition-colors dark:bg-[#0d0d0d] dark:text-white flex flex-col gap-8 shadow-sm border-t border-gray-200 dark:border-zinc-800">
            <div className="flex w-full max-w-7xl flex-col md:flex-row gap-[60px] items-stretch">

                <div className="flex flex-col gap-4 min-w-[250px]">
                    <div className="flex shrink-0 items-center">
                        {darkMode ? (
                            <img className="h-[55px] w-auto" src={logoB} alt="Logo Blanco" />
                        ) : (
                            <img className="h-[55px] w-auto" src={logo} alt="Logo" />
                        )}
                    </div>
                    <div className="flex flex-col text-sm text-gray-600 dark:text-[#c3c4c3]">
                        <p>Equipamiento táctico y balístico de</p>
                        <p>alta calidad para profesionales que</p>
                        <p>exigen lo mejor.</p>
                    </div>
                </div>

                <div className="hidden md:block w-[1px] self-stretch bg-[#c3c4c3]/50 dark:bg-zinc-800"></div>

                <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-[#c3c4c3]">
                        <h4 className="uppercase font-bold text-black dark:text-white mb-1">Productos</h4>
                        <a href="#" className="hover:underline">Equipo Táctico</a>
                        <a href="#" className="hover:underline">Equipo Balístico</a>
                        <a href="#" className="hover:underline">Accesorios</a>
                        <a href="#" className="hover:underline">Vestimenta industrial</a>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-[#c3c4c3]">
                        <h4 className="uppercase font-bold text-black dark:text-white mb-1">Información</h4>
                        <a href="#" className="hover:underline">Nosotros</a>
                        <a href="#" className="hover:underline">Servicios</a>
                        <a href="#" className="hover:underline">Términos y condiciones</a>
                        <a href="#" className="hover:underline">Política de privacidad</a>
                    </div>

                    <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-[#c3c4c3]">
                        <h4 className="uppercase font-bold text-black dark:text-white mb-1">¿Necesitas ayuda?</h4>
                        <p className="text-xs">Estamos aquí para ayudarte</p>
                        
                        <div className="flex items-start gap-2">
                            <BsGeoAltFill className="text-[#f59a26] shrink-0 mt-1"/>
                            <span>Antonio Bellet 193, Oficina 1210, Providencia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsFillTelephoneFill className="text-[#f59a26] shrink-0"/>
                            <span>+56 9 9361 9179</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsEnvelopeFill className="text-[#f59a26] shrink-0" />
                            <span>ventas@induwork.cl</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full h-[1px] bg-[#c3c4c3]/40 dark:bg-zinc-800"></div>

            <div className="mx-auto w-full flex justify-start">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2023 Induwork. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;