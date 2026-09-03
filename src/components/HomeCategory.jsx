import { Link } from 'react-router-dom';

const HomeCategory = () => {
    return (
        <div className="w-full h-auto text-black dark:text-white pl-[60px] pr-[60px] p-[40px] gap-[15px] flex flex-col">
            <div className="w-[20px] h-[2px] bg-[#f59a26]"></div>
            <div>
                <h2 className="text-xl font-bold uppercase tracking-wide">Categorias principales</h2>
            </div>
            <div className="grid grid-cols-4 gap-[20px] items-center justify-center">
                <Link 
                    to="/tienda/seguridad"
                    className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer p-[20px] gap-[10px]"
                    >
                    <img 
                        src="/images/Categoria-01.png"
                        alt="Seguridad" 
                        className="w-auto h-[140px] object-contain" 
                    />

                    <span className="text-base font-semibold text-black dark:text-white group-hover:text-blue-600 transition-colors">
                        Seguridad
                    </span>
                </Link>
                <Link 
                    to="/tienda/equipo-tactico"
                    className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer p-[20px] gap-[10px]"
                >
                    <img 
                        src="/images/Categoria-02.png"
                        alt="Equipo Táctico" 
                        className="w-auto h-[140px] object-contain" 
                    />
                    <span className="text-base font-semibold text-black dark:text-white group-hover:text-blue-600 transition-colors">
                        Equipo Táctico
                    </span>
                </Link>
                <Link 
                    to="/tienda/equipo-balistico"
                    className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer p-[20px] gap-[10px]"
                >
                    <img 
                        src="/images/Categoria-03.png"
                        alt="Equipo Balístico" 
                        className="w-auto h-[140px] object-contain" 
                    />
                    <span className="text-base font-semibold text-black dark:text-white group-hover:text-blue-600 transition-colors">
                        Equipo Balístico
                    </span>
                </Link>
                <Link 
                    to="/tienda/accesorios"
                    className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer p-[20px] gap-[10px]"
                >
                    <img 
                        src="/images/Categoria-04.png"
                        alt="Accesorios" 
                        className="w-auto h-[140px] object-contain" 
                    />
                    <span className="text-base font-semibold text-black dark:text-white group-hover:text-blue-600 transition-colors">
                        Accesorios
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default HomeCategory