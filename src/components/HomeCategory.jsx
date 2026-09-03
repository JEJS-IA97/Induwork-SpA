const HomeCategory = () => {
    return (
        <div className="w-full h-auto text-black dark:text-white pl-[60px] pr-[60px] p-[20px] gap-[15px] flex flex-col">
            <div className="w-[20px] h-[2px] bg-[#f59a26]"></div>
            <div>
                <h2 className="uppercase">Categorias principales</h2>
            </div>
            <div className="grid grid-cols-4 gap-[20px] items-center justify-center">
                <a className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md transition-colors hover:shadow-lg hover:scale-105 cursor-pointer" href={"tienda/seguridad"}>
                    Seguridad
                </a>
                <a className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md transition-colors hover:shadow-lg hover:scale-105 cursor-pointer" href={"tienda/equipo-tactico"}>
                    Equipo Táctico
                </a>
                <a className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md transition-colors hover:shadow-lg hover:scale-105 cursor-pointer" href={"tienda/equipo-balistico"}>
                    Equipo Balístico
                </a>
                <a className="flex flex-col items-center justify-center w-auto h-[200px] bg-white dark:bg-[#181818] rounded-lg shadow-md transition-colors hover:shadow-lg hover:scale-105 cursor-pointer" >
                    Accesorios
                </a>
            </div>
        </div>
    )
}

export default HomeCategory