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
import kolkata from "../../Images/kolkata.webp";
import mumbai from "../../Images/Mumbai.jpg";
import kerala from "../../Images/Kerala.jpg";
import Heading from "../Heading/SecHeading";

const slidesData1 = [
  { src: slide1, alt: "Category 1", link: "/category1" },
  { src: slide2, alt: "Category 2", link: "/category2" },
  { src: slide3, alt: "Category 3", link: "/category3" },
];

const cards = [
  { id: 1, title: "Kolkata", image: kolkata },
  { id: 2, title: "Kerala", image: kerala },
  { id: 3, title: "Mumbai", image: mumbai },
];

const HomeCategorySlider = () => {
  return (
    <>
      <Heading title="Top Business Solutions" />
      <div className="container">
      <div className="container my-2">
        <div className="row justify-content-center">
          {/* First Slider */}
          <div className="col-lg-6 col-md-8 col-sm-10 mb-3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="home-category-swiper"
            >
              {slidesData1.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Link href={slide.link} legacyBehavior>
                    <a>
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={600}
                        height={400}
                        priority
                        className="home-category-slide-Image"
                      />
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Cards Section */}
          <div className="col-lg-6 col-md-10 col-sm-12">
            <div className="row">
              {cards.map((card) => (
                <div key={card.id} className="col-md-4 col-sm-6 col-12 mb-3">
                  <div className="home-category-card">
                    <div className="home-category-image-container">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={300}
                        height={200}
                        priority
                        className="home-category-card-image"
                      />
                      <div className="home-category-overlay"></div>
                      <h5 className="home-category-card-title">{card.title}</h5>
                      <Link href="#" legacyBehavior>
                        <a>
                          <button className="home-category-view-btn">
                            View
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomeCategorySlider;
