import React from 'react';
import CityCards from './Components/CityFilter/CityFilter';
import Blogs from './Components/Blogs/Blogs';
import BussinessCategory from './Components/BussinessCate/BussinessCategory';
import Hero from './Components/Hero/Hero';
export default function Home() {
  return (
    <>
    <Hero />
    <BussinessCategory/>
    <CityCards/>
    <Blogs />
import React from "react";
import CityCards from "./Components/CityFilter/CityFilter";
import BussinessCategory from "./Components/BussinessCate/BussinessCategory";
import TrustPilot from "./Components/TrustPilot/TrustPilot";
import HomeCategorySlider from "./Components/HomeCategorySlider/HomeCategorySlider ";
import ServicesCategories from "./Components/ServicesCategories/ServicesCategories";
import TestimonialSection from "./Components/Testimonial/Testimonial";
export default function Home() {
  return (
    <>
    <HomeCategorySlider/>
      <BussinessCategory/>
      <ServicesCategories/>
      <CityCards />
      <TrustPilot/>
      <TestimonialSection/>
    </>
  );
}
