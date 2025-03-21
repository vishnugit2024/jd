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
    </>
  );
}
