import React from 'react';
import BussinessCategory from './Components/BussinessCate/BussinessCategory';
import CityCards from './Components/CityFilter/CityFilter';
import Blogs from './Components/Blogs/Blogs';
export default function Home() {
  return (
    <>
    {/* <BussinessCategory/> */}
    <CityCards/>
    <Blogs />
import React from "react";
import BussinessCategory from "./Components/BussinessCate/BussinessCategory";
import CityCards from "./Components/CityFilter/CityFilter";

export default function Home() {
  return (
    <>
      <BussinessCategory />
      <CityCards />
    </>
  );
}
