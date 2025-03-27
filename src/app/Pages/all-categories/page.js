"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import rocket from "../../Images/rocket.gif";
import Heading from "../../Components/Heading/SecHeading";
import '../../Components/BussinessCate/BussinessCategory.css';
import breadbg from "../../Images/bread.jpg"

const categories = [
  { id: 1, title: "Web Development", icon: rocket },
  { id: 2, title: "Graphic Design", icon: rocket },
  { id: 3, title: "Digital Marketing", icon: rocket },
  { id: 4, title: "Content Writing", icon: rocket },
  { id: 5, title: "SEO Optimization", icon: rocket },
  { id: 6, title: "App Development", icon: rocket },
  { id: 7, title: "Video Editing", icon: rocket },
  { id: 8, title: "Cyber Security", icon: rocket },
  { id: 9, title: "Cloud Computing", icon: rocket },
  { id: 10, title: "AI & ML Services", icon: rocket },
  { id: 11, title: "E-commerce Solutions", icon: rocket },
  { id: 12, title: "Tech Consulting", icon: rocket },
];

const Page = () => {
  return (
    <>
      <div className='all-breadcrumb'>
        <Image
          src={breadbg}
          alt="Breadcrumb Background"
          layout="fill"
          objectFit="cover"
        />
        <div className='bread-overlay'></div> {/* Overlay should be separate */}
        <div className='container'>
          <div className='bread-content'>
            <h1>Your One-Stop Destination for Local Businesses</h1>
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol>
                <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                <li><i className="bi bi-chevron-double-right"></i></li>
                <li style={{color:"var(--blue)"}}>All Categories</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <Heading title="Business Categories" subtitle="Explore top categories" />
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-2 col-md-3 col-sm-4 col-4">
              <Link
                href={`../../Pages/all-categories/[id]${category.id}`}
                className="text-decoration-none"
                alt={category.title}
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
    </>
  );
};

export default Page;
