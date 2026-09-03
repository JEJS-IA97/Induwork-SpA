import HomeCards from "./HomeCards";
import { BsArrowRight } from "react-icons/bs";
import data from "../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BestSellers = () => {
    return (
        <div className="flex w-full flex-col gap-4 px-[60px] py-[40px] text-black dark:text-white">
        <div className="h-[2px] w-[20px] bg-[#f59a26]" />
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase tracking-wide">
            Productos destacados
            </h2>
            <a
            href="/tienda"
            className="flex items-center text-[#f59a26] transition-colors hover:text-[#d8821a]"
            >
            Ver todos
            <BsArrowRight className="ml-1 inline-block" />
            </a>
        </div>

        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            slidesPerGroup={5}
            autoplay={{
            delay: 4000, 
            disableOnInteraction: false, 
            }}
            loop={true}
            pagination={{ clickable: true }}
            className="w-full pb-10"
        >
            {data.map((product) => (
            <SwiperSlide key={product.id}>
                <HomeCards
                imagen={product.imagen}
                nombre={product.nombre}
                subnombre={product.subnombre}
                precio={product.precio}
                rating={product.rating}
                reviewsCount={product.reviewsCount}
                />
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default BestSellers;