import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
    return (
        <div className="mt-20 ">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <img src="/img/swiper/header.png" alt="" className="= w-full" />
                </SwiperSlide>
                <SwiperSlide>

                <img src="/img/swiper/4.png" alt="" className="= w-full" />

                </SwiperSlide>
                <SwiperSlide>

                <img src="/img/swiper/2.png" alt="" className=" w-full"/>

                </SwiperSlide>
            </Swiper>
        </div>
    );
}