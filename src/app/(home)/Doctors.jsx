"use client"

import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import {featuredDoctors} from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { featuredDoctors } from '@/data/featuredDoctors';

SwiperCore.use([Navigation, Pagination]);

const Doctors = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const autoplayDuration = 5000;

    const interval = setInterval(() => {
      if (swiper) {
        if (swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, autoplayDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center font-semibold mb-4">Our Doctors</h1>
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6  p-4">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          // navigation
        //   pagination={{ clickable: true }}
          loop
          className="swiper-container"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {featuredDoctors.map((doctor, index) => (
            <SwiperSlide key={index} className='border border-blue-700 rounded-md p-4 cursor-pointer'>
              <Link  href={`/doctors/${doctor.id}?doctorId=${doctor.id}`} passHref className="flex flex-col items-center h-full"> {/* Added h-full */}
                <Image
                  src={doctor.image}
                  alt={doctor.Name}
                  width={250}
                  height={250}
                  className="rounded-full mb-3"
                />
                <div className='text-center h-24'>
                  <h2 className="text-xl font-semibold">{doctor.Name}</h2>
                  <p className="text-gray-600">{doctor.SPECIALIZATION}</p>
                  <p className="text-gray-600 overflow-hidden">{doctor.education_place}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Doctors;