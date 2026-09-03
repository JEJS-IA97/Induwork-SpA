const Clientes = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-6 md:px-[60px] py-[40px] text-black dark:text-white">
      <div className="h-[2px] w-[20px] bg-[#f59a26]" />
      <h2 className="text-xl font-bold uppercase tracking-wide">
        Nuestros valiosos clientes
      </h2>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg bg-gray-100 dark:bg-[#181818] flex items-center justify-center">
          <img src="/images/Cliente-01.jpg" alt="Cliente 1" className="h-full w-full object-contain p-4" />
        </div>
        <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg bg-gray-100 dark:bg-[#181818] flex items-center justify-center">
          <img src="/images/Cliente-02.jpg" alt="Cliente 2" className="h-full w-full object-contain p-4" />
        </div>
        <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg bg-gray-100 dark:bg-[#181818] flex items-center justify-center">
          <img src="/images/Cliente-03.jpg" alt="Cliente 3" className="h-full w-full object-contain p-4" />
        </div>
        <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg bg-gray-100 dark:bg-[#181818] flex items-center justify-center">
          <img src="/images/Cliente-04.jpg" alt="Cliente 4" className="h-full w-full object-contain p-4" />
        </div>
      </div>
    </div>
  );
}

export default Clientes;