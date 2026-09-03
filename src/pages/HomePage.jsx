import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';
import Routes from '../components/NavRoutes';
import HomeCategory from '../components/HomeCategory';
import BestSellers from '../components/BestSellers';
import News from '../components/News';
import Footer from '../components/Footer';
import Clientes from '../components/Clientes';

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