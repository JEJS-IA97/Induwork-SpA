import HomeCards from "./HomeCards";
import { BsArrowRight, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import data from "../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="flex w-full flex-col gap-4 px-[60px] py-[40px] text-black dark:text-white">

            <div className="h-[2px] w-[20px] bg-[#f59a26]" />

            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold uppercase tracking-wide">
                    Recien agregados 
                </h2>

                <Link
                    to="/tienda"
                    className="flex items-center text-[#f59a26] transition-colors hover:text-[#d8821a]"
                >
                    Ver todos
                    <BsArrowRight className="ml-1 inline-block" />
                </Link>
            </div>

            <div className="relative">

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}

                    slidesPerView={5}
                    slidesPerGroup={1}

                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    loop={true}

                    navigation={{
                        nextEl: ".products-next",
                        prevEl: ".products-prev",
                    }}

                    className="w-full"
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

                <button
                    className="products-prev absolute left-[-20px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f59a26] text-white shadow-md transition hover:bg-[#d8821a] cursor-pointer"
                    aria-label="Producto anterior"
                >
                    <BsCaretLeftFill />
                </button>

                <button
                    className="products-next absolute right-[-20px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f59a26] text-white shadow-md transition hover:bg-[#d8821a] cursor-pointer"
                    aria-label="Siguiente producto"
                >
                    <BsCaretRightFill />
                </button>

            </div>
        </div>
    );
};

export default News