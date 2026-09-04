import Navbar from './Navbar';
import NavRoutes from './NavRoutes';
import Footer from './Footer';

const LegalLayout = ({ title, lastUpdated, sections, darkMode, setDarkMode }) => {
    return (
        <div className="flex min-h-screen flex-col bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="pt-[80px]">
            <NavRoutes />
        </div>

        <section className="w-full px-6 md:px-[60px] pt-10 pb-6">
            <div className="flex flex-col gap-2">
            <div className="h-[2px] w-[20px] bg-[#f59a26]" />
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
                {title}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                Última actualización: {lastUpdated}
            </p>
            </div>
        </section>

        <main className="flex-1 w-full px-6 md:px-[60px] pb-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <aside className="hidden lg:block lg:col-span-1">
        <div className="sticky top-[140px] flex max-h-[calc(100vh-160px)] flex-col gap-3 rounded-lg bg-white p-5 shadow-md dark:bg-[#181818]">
            <h3 className="shrink-0 text-sm font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200">
            En esta página
            </h3>

            <div className="overflow-y-auto pr-2 py-1 flex-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700">
            <nav className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                {sections.map((sec, idx) => (
                <a
                    key={sec.title}
                    href={`#section-${idx}`}
                    className="transition-colors hover:text-[#f59a26] dark:hover:text-[#f59a26]"
                >
                    {idx + 1}. {sec.title}
                </a>
                ))}
            </nav>
            </div>

        </div>
        </aside>

            <section className="lg:col-span-3 flex flex-col gap-6">
                <div className="rounded-lg bg-white p-6 sm:p-10 shadow-md dark:bg-[#181818] flex flex-col gap-8">
                {sections.map((sec, idx) => (
                    <div key={sec.title} id={`section-${idx}`} className="flex flex-col gap-3 scroll-mt-28">
                    <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f59a26] text-xs font-bold text-white">
                        {idx + 1}
                        </span>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase">
                        {sec.title}
                        </h2>
                    </div>
                    <div className="text-sm leading-relaxed text-gray-700 dark:text-[#c3c4c3] flex flex-col gap-3 pl-10">
                        {sec.content}
                    </div>
                    </div>
                ))}
                </div>
            </section>

            </div>
        </main>
        <Footer darkMode={darkMode} />
        </div>
    );
};

export default LegalLayout;