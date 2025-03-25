import React from "react";
import "./BussinessCategory.css";
import Heading from "../Heading/SecHeading";
import Image from "next/image";
import rocket from "../../Images/rocket.gif"; // Or use "/rocket.gif" from public folder
import Link from "next/link";
const categories = [
  {
    id: 1,
    title: "Web Development",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 2,
    title: "Graphic Design",
    icon: rocket,
    link: "/Graphic design",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 4,
    title: "Content Writing",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 5,
    title: "SEO Optimization",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 6,
    title: "App Development",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 7,
    title: "Video Editing",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 8,
    title: "Cyber Security",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 9,
    title: "Cloud Computing",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 10,
    title: "AI & ML Services",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 11,
    title: "E-commerce Solutions",
    icon: rocket,
    link: "/WebDevelopment",
  },
  {
    id: 12,
    title: "Tech Consulting",
    icon: rocket,
    link: "/WebDevelopment",
  },
];

const BussinessCategory = () => {
  return (
    <>
      <Heading
        title="Top Business Categories"
        subtitle="Businesses by category"
      />

      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-2 col-md-3 col-sm-4 col-4">
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
          <div className="d-flex justify-content-center mt-3">
            <Link href="/BussinessCategories">
              <button className="login-btn">View All</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessCategory;
