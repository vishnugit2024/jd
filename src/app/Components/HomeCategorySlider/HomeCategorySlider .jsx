"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomeCategoryslider.css";
import Image from "next/image";
import Link from "next/link";
import slide1 from "../../Images/slide1.webp";
import slide2 from "../../Images/slide2.webp";
import slide3 from "../../Images/slide3.webp";
import slide4 from "../../Images/slide4.avif";
import slide5 from "../../Images/slide5.webp";
import kolkata from "../../Images/kolkata.webp";
import mumbai from "../../Images/mumbai.jpg";
import kerala from "../../Images/kerala.jpg";
import karnataka from "../../Images/karnataka.jpg";

const slidesData1 = [
  { src: slide1, alt: "Slide 1", link: "/category1" },
  { src: slide2, alt: "Slide 2", link: "/category2" },
  { src: slide3, alt: "Slide 3", link: "/category3" },
];

const slidesData2 = [
  { src: slide4, alt: "Slide 1", link: "/category2" },
  { src: slide5, alt: "Slide 2", link: "/category3" },
  { src: slide1, alt: "Slide 3", link: "/category1" },
];

const cards = [
  { id: 1, title: "Card 1", image: kolkata },
  { id: 2, title: "Card 2", image: kerala },
  { id: 3, title: "Card 3", image: mumbai },
  { id: 4, title: "Card 4", image: karnataka },
];

const HomeCategorySlider = () => {

  return (
    <>
      <div className="container-fluid my-2">
        <div className="row justify-content-center">
          {/* First Slider */}
          <div className="col-md-6">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              direction="horizontal"
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="home-category-swiper"
            >
              {slidesData1.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Link href={slide.link}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={600}
                      height={400}
                      className="home-category-slide-Image"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second Slider */}
          <div className="col-md-6">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              direction="horizontal"
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="home-category-swiper"
            >
              {slidesData2.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Link href={slide.link}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={600}
                      height={400}
                      className="home-category-slide-Image"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            {cards.map((card) => (
              <div
                key={card.id}
                className="col-md-3 home-category-card-container"
              >
                <div className="home-category-card">
                  <div className="home-category-image-container">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="home-category-card-image"
                    />
                    <div className="home-category-overlay"></div>
                    <h5 className="home-category-card-title">{card.title}</h5>
                    <Link href="#">
                      <button className="home-category-view-btn">View</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategorySlider;
