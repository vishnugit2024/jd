
import React from "react";
import CityCards from "./Components/CityFilter/CityFilter";
import BussinessCategory from "./Components/BussinessCate/BussinessCategory";
import TrustPilot from "./Components/TrustPilot/TrustPilot";
import HomeCategorySlider from "./Components/HomeCategorySlider/HomeCategorySlider ";
import ServicesCategories from "./Components/ServicesCategories/ServicesCategories";
import TestimonialSection from "./Components/Testimonial/Testimonial";
import Blogs from "./Components/Blogs/Blogs";

export default function Home() {
  return (
    <>
    <HomeCategorySlider/>
      <BussinessCategory/>
      <ServicesCategories/>
      <CityCards />
      <TrustPilot/>
      <TestimonialSection/>
      <Blogs/>
    </>
  );
}
