import HeroBanner from '../../components/home/HeroBanner';
import Navbar from '../../components/layout/Navbar';
import Routes from '../../components/layout/NavRoutes';
import HomeCategory from '../../components/home/HomeCategory';
import BestSellers from '../../components/home/BestSellers';
import News from '../../components/home/News';
import Footer from '../../components/layout/Footer';
import Clientes from '../../components/home/Clientes';

const HomePage = ({ darkMode, setDarkMode }) => {
    return (
        <div className="flex flex-col">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="pt-[80px]">
                <Routes darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <HeroBanner darkMode={darkMode} setDarkMode={setDarkMode}/>
            <HomeCategory darkMode={darkMode} setDarkMode={setDarkMode}/>
            <BestSellers darkMode={darkMode} setDarkMode={setDarkMode}/>
            <News darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Clientes darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
    )
}

export default HomePage;