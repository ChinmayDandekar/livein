"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { useState } from "react";
import StoryBox from "./StoryBox";
import { IoMdClose } from "react-icons/io";

const StorySwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (

        <section className="w-full h-full fixed top-0 left-0 bg-black/50 flex items-center justify-center p-1 ">

            <div className="w-max h-max">
                <IoMdClose className="text-white fixed top-10 left-10 text-2xl cursor-pointer hover:text-black"/>

            </div>
            <Swiper
                slidesPerView={"auto"}
                className="!w-full  !h-[80vh] "
                centeredSlides
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                spaceBetween={150}
            >
                {
                    [1, 2, 3, 4, 5, 6].map((name, index) =>
                        <SwiperSlide key={index} className=" !w-[450px] !h-[80vh] !max-h-[1000px] bg-white ">
                            <StoryBox isActive={activeIndex == index} />
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </section>
    )
}

export default StorySwiper