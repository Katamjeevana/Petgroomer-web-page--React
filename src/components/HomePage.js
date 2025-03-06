import React from "react";
import Banner from "./Banner";
import HowWeWork from "./Work";
import Products from "./Products";
import Image from "./Image";
import Layouts from "./Assest";
import PamperSpa from "./PamperSpa";
import Explore from "./Explore";
import Discount from "./Discount";
import ServiceProviders from "./ServiceProviders";
import Newarrival from "./Newarrival";
import Latest from "./Latest";
import TestimonialSection from "./TestimonialSection";
import ViewAllButton from "./ViewAllButton";

const HomePage = () => {
  return (
    <>
      <Banner />
      <HowWeWork />
      <Products />
      <Image />
      <Layouts />
      <PamperSpa />
      <Explore />
      <Discount />
      <ServiceProviders />
      <Newarrival />
      <Latest />
      <TestimonialSection />
    </>
  );
};

export default HomePage;