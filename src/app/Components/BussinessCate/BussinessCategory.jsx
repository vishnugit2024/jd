import React from "react";
import "./BussinessCategory.css";
import Heading from "../Heading/SecHeading";
import Image from "next/image";
import rocket from "../../Images/rocket.gif";

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

const BussinessCategory = () => {
  return (
    <>
      <Heading title="Top Business Categories" subtitle="Businesses by category" />

      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div key={category.id} className="col-md-2 col-sm-3 col-4">
              <div className="bussiness-category-card">
                <Image src={category.icon} alt={category.title} />
                <h6>{category.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BussinessCategory;
