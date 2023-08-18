"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import SingleBanner from "./SingleBanner";
import { mainSlider } from "@/data/mainSlider";
import { Autoplay, EffectFade, Navigation } from "swiper";

const Banner = () => {
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay={{ delay: 2000 }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleBanner slider={slider}></SingleBanner>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
