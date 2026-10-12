import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS
import { Autoplay } from "swiper/modules"; // Import the Autoplay module

import laconic from "/Images/laconiclogo.png";
import aramco from "/Images/aramcologo.png";
import intelchain from "/Images/logointelchain.png";
// import bywinn from "/Images/bywinn.png";
import noddi from "/Images/noddi.png";

const ImageSlider = () => {
  // Use the imported images in the array
  const images = [
    intelchain,
    // bywinn,
    noddi,
    aramco,
    laconic,
    intelchain,
    // bywinn,
    noddi,
    aramco,
    laconic,
    intelchain,
    // bywinn,
    noddi,
    aramco,
    laconic,
  ];

  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay]} // Register the Autoplay module here
        spaceBetween={20} // Space between slides
        loop={true}
        autoplay={{ delay: 1000 }} // Set the autoplay delay to 3 seconds
        breakpoints={{
          // Number of slides per view for different screen sizes
          320: { slidesPerView: 1, spaceBetween: 10 }, // 1 image for very small screens
          480: { slidesPerView: 2, spaceBetween: 15 }, // 2 images for small screens
          768: { slidesPerView: 3, spaceBetween: 20 }, // 3 images for medium screens
          1024: { slidesPerView: 4, spaceBetween: 30 }, // 4 images for large screens
          1280: { slidesPerView: 5, spaceBetween: 40 }, // 5 images for extra large screens
        }}
        className="flex justify-center"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
