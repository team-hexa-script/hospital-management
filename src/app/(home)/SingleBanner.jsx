import Image from "next/image";
import React from "react";

const SingleBanner = ({ slider = {} }) => {
  const { bg, title } = slider;
  return (
    <div className="relative">
      <Image
        src={bg}
        alt={title}
        width={1920}
        height={1080}
        objectFit="cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">{title}</h2>
        <p className="mt-2 text-lg md:text-xl">
          Discover the world of healthcare
        </p>
        <div className="mt-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded-md mr-4 hover:bg-red-700 transition-colors duration-300">
            Emergency Call
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
