"use client";
import React from "react";
import Image from "next/image";
import HOMEBEAUTY from "../../Images/HOMEBEAUTY.jpg";
import HOMEBED from "../../Images/HOMEBED.jpg";
import HOMEBOY from "../../Images/HOMEBOY.png";
import HOMEBRAIN from "../../Images/HOMEBRAIN.webp";
import HOMECAR from "../../Images/HOMECAR.png";
import HOMECELEBRATIONS from "../../Images/HOMECELEBRATIONS.png";
import HOMEDENTAL from "../../Images/HOMEDENTAL.png";
import HOMEEDUCATION from "../../Images/HOMEEDUCATION.png";
import HOMEFURNITURE from "../../Images/HOMEFURNITURE.png";
import breadbg from "../../Images/HeroBanner.jpg";
import HOMEGYM from "../../Images/HomeGYM.png";
import HOMEHOSPITAL from "../../Images/HOMEHOSPITAL.png";
import HOMEKEY from "../../Images/HOMEKEY.WEBP";
import HOMEMONEY from "../../Images/HOMEMONEY.png";
import HOMEPETS from "../../Images/HOMEPETS.png";
import HOMERESTURANT from "../../Images/HOMERESTURANT.jpg";
import HOMETRUCK from "../../Images/HOMETRUCK.png";
import HOMEWORK from "../../Images/HOMEWORK.png";
import "../../Components/BussinessCate/BussinessCategory.css";
import Link from "next/link";
const categories = [
  {
    id: 1,
    title: "Beauty & Spa",
    icon: HOMEBEAUTY,
    link: "/WebDevelopment",
  },
  {
    id: 2,
    title: "PG/Hotels",
    icon: HOMEBED,
    link: "/Graphic design",
  },
  {
    id: 3,
    title: "Courier Services",
    icon: HOMEBOY,
    link: "/WebDevelopment",
  },
  {
    id: 4,
    title: "Content Writing",
    icon: HOMEBRAIN,
    link: "/WebDevelopment",
  },
  {
    id: 5,
    title: "Driving Services",
    icon: HOMECAR,
    link: "/WebDevelopment",
  },
  {
    id: 6,
    title: "Event Organizers",
    icon: HOMECELEBRATIONS,
    link: "/WebDevelopment",
  },
  {
    id: 7,
    title: "Dentists",
    icon: HOMEDENTAL,
    link: "/WebDevelopment",
  },
  {
    id: 8,
    title: "Education",
    icon: HOMEEDUCATION,
    link: "/WebDevelopment",
  },
  {
    id: 9,
    title: "Furniture",
    icon: HOMEFURNITURE,
    link: "/WebDevelopment",
  },
  {
    id: 10,
    title: "Hospital",
    icon: HOMEHOSPITAL,
    link: "/WebDevelopment",
  },
  {
    id: 11,
    title: "Gym",
    icon: HOMEGYM,
    link: "/WebDevelopment",
  },
  {
    id: 12,
    title: "Rent & Hire",
    icon: HOMEKEY,
    link: "/WebDevelopment",
  },
  {
    id: 13,
    title: "Loans",
    icon: HOMEMONEY,
    link: "/WebDevelopment",
  },
  {
    id: 14,
    title: "Pet Shops",
    icon: HOMEPETS,
    link: "/WebDevelopment",
  },
  {
    id: 15,
    title: "Resturants",
    icon: HOMERESTURANT,
    link: "/WebDevelopment",
  },
  {
    id: 16,
    title: "Delivery Services",
    icon: HOMETRUCK,
    link: "/WebDevelopment",
  },
  {
    id: 17,
    title: "Contractors",
    icon: HOMEWORK,
    link: "/WebDevelopment",
  },
];

const page = () => {
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
          <div className="bread-overlay"></div>{" "}
          {/* Overlay should be separate */}
          <div className="container">
            <div className="bread-content">
              <h1>Find What You Need Fast</h1>
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol>
                  <li>
                    <Link href="/" className="hover:text-blue-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right"></i>
                  </li>
                  <li style={{ color: "var(--blue)" }}>All Categories</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            {categories.map((category) => (
              <div
                key={category.id}
                className="col-lg-2 col-md-3 col-sm-4 col-4"
              >
                <Link
                  href={category.link}
                  alt={category.title}
                  className="text-decoration-none"
                >
                  <div className="bussiness-category-card text-center p-3">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={50}
                      height={50}
                    />
                    <h6 className="mt-2">{category.title}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
