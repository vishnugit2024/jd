import React from "react";
import "./citytourismGuide.css";
import breadbg from "../../Images/MumbaiCity.jpg";
import Image from "next/image";
import Link from "next/link";
import Coffee from "../../Images/Coffee.png";
import AboutMumbai from "../../Images/AboutMumbai.jpg";
import CitySchool from "../../Images/CitySchool.png";
import Resturant from "../../Images/Resturant.png";
import CItyTouristplaces from "../../Images/CItyTouristplaces.jpg";
import CityHotels from "../../Images/CityHotels.jpg";
import CityHospitals from "../../Images/CityHospitals.png";
import CityCarRentals from "../../Images/CityCar Rentals.jpg";
import CityCinemaHalls from "../../Images/CityCinemaHalls.jpg";
import CityMalls from "../../Images/CityMalls.jpg";
import CitySpa from "../../Images/CitySpa.jpg";
import CitySaloon from "../../Images/CitySaloon.jpg";
import CityGym from "../../Images/CityGym.jpg";

const page = () => {
  const Categorydata = [
    {
      image: Resturant,
      title: "Restaurants",
      link: "/Pages/bussiness-listing",
    },
    {
      image: Coffee,
      title: "Cafes",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CItyTouristplaces,
      title: "Tourist places",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CityHotels,
      title: "Hotels",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CityHospitals,
      title: "Hospitals",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CityCarRentals,
      title: "Car Rentals",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CityCinemaHalls,
      title: "Cinema Halls",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CityMalls,
      title: "Malls",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CitySpa,
      title: "Spa",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CitySaloon,
      title: "Saloon",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CityGym,
      title: "Gym",
      link: "/Pages/bussiness-listing",
    },
    {
      image: CitySchool,
      title: "School",
      link: "/Pages/bussiness-listing",
    },
  ];
  return (
    <>
      <section>
        <div className="all-breadcrumb">
          <Image
            src={breadbg}
            alt="Breadcrumb Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="city-bread-overlay"></div>
          <div className="container">
            <div className="bread-content">
              <h1>Discover the Best of Mumbai</h1>
              <h6>Welcome to the City of Dreams</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="citys-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="citys-section-head">
                <h1 className="citys-section-heading">
                  What are you looking for?
                </h1>
              </div>
            </div>
            {Categorydata.map((category, index) => (
              <div key={index} className="col-md-2 col-sm-3 col-4">
                <div className="city-category-select-data">
                  <Link href={category.link}>
                    <div className="city-category-img">
                      <Image
                        src={category.image}
                        alt={category.title}
                        className="city-category-round-img"
                      />
                    </div>
                  </Link>

                  <h4 className="city-category-title">{category.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="city-about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="city-about-div">
                <Image
                  src={AboutMumbai}
                  alt="About Mumbai"
                  className="city-about-image"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="city-about-content">
                <h1 className="city-about-title">About Mumbai</h1>
                <p className="city-about-text">
                  Mumbai is the <b>City of Dreams</b>, a vibrant metropolis
                  where Bollywood glitz collides with historical charm. Explore
                  iconic landmarks like the Gateway of India, get lost in the
                  labyrinthine lanes of Crawford Market, or marvel at the
                  efficiency of the Dabbawala lunchbox delivery system. Foodies
                  will love the street food scene, while history buffs can delve
                  into Mumbai's colonial past at the Chhatrapati Shivaji Maharaj
                  Vastu Sangrahalaya museum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
