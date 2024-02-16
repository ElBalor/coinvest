"use client";
import React from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface HeroProps {
  // Add any additional props you might need
}

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
    onClick={onClick || (() => {})} // Provide a default empty function
  >
    <PiCaretLeftLight />
  </div>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
    onClick={onClick || (() => {})} // Provide a default empty function
  >
    <PiCaretRightLight />
  </div>
);

const Hero: React.FC<HeroProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="overflow-hidden items-center top-0 justify-center w-screen h-full">
      <div className="max-w-8xl mx-auto mt-4">
        <Slider {...settings}>
          <div className="w-full h-full relative">
            <img
              src="/tower.jpg"
              className="w-screen xl:h-[800px] h-[400px] relative"
            />
            <h1 className=" absolute top-7 left-3 w-full h-full font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-700">
              Nigeria's Energy <br /> Power house
            </h1>
          </div>
          <div className="w-full h-full relative">
            <img
              src="../many.jpg"
              className=" w-screen xl:h-[800px] h-[400px] relative"
            />
            <h1 className=" absolute top-7 left-3 w-full h-full font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-700">
              Nigeria's Energy <br /> Power house
            </h1>
          </div>
          <div className="w-full h-full relative">
            <img
              src="../egypt.jpg"
              className="w-screen xl:h-[800px] h-[400px] relative"
            />
            <h1 className=" absolute top-7 left-3 w-full h-full font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-700">
              Nigeria's Energy <br /> Power house
            </h1>
          </div>
          <div className="w-full h-full relative">
            <img
              src="../yatch.jpg"
              className="w-screen xl:h-[800px] h-[400px] relative"
            />
            <h1 className=" absolute top-7 left-3 w-full h-full font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-700">
              Nigeria's Energy <br /> Power house
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
