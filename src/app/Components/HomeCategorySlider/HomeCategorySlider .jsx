"use client"; // For Next.js App Router (if needed)

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeCategoryslider.css";

import slide1 from "../../Images/slide1.webp";
import slide2 from "../../Images/slide2.webp";
import slide3 from "../../Images/slide3.webp";
import slide4 from "../../Images/slide4.avif";
import slide5 from "../../Images/slide5.webp";
import Image from "next/image";

const HomeCategorySlider = () => {
  const images1 = [slide1, slide2, slide3];
  const images2 = [slide4, slide5, slide1];

  return (
    <div className="container">
      <div className="row">
        {/* First Slider */}
        <div className="col-md-6 col-12">
          <div className="slider-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="category-slider"
            >
              {images1.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="slider-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Second Slider */}
        <div className="col-md-6 col-12">
          <div className="slider-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="category-slider"
            >
              {images2.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Slide ${index + 4}`}
                    className="slider-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategorySlider;
