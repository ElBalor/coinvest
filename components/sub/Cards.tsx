import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="max-w-lg rounded-md overflow-hidden shadow-lg bg-gradient-to-tr from-[#cec8e9] to-[#5d5581] border border-black/25 pt-8 mb-6">
        <h1 className="mb-5 top-0 text-pretty  text-2xl ml-2 text-amber-900">
          Energy product leasing
        </h1>
        <div className="border p-3 flex justify-between items-center text-center border-blue-600/5">
          <h1 className="border border-r p-3 pl-3 rounded-md bg-gradient-to-br from-amber-500 to-amber-800">
            Monthly
          </h1>
          <h1 className="border border-r p-3 pl-3 rounded-md bg-blend-saturation border-amber-500">
            Daily
          </h1>
          <div className=" text-lg"> |</div>
          <h1>Activity</h1>
        </div>
        <Image
          className="w-full"
          src="/bronze.jpg"
          width={80}
          height={80}
          alt="pip"
        />
        <div className="px-6 py-4">
          <div className="justify-between">
            <h1 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-br from-black via-amber-600 to-amber-500">
              Bronze
            </h1>
            <div className=" justify-between flex">
              <h1>Each Price</h1>
              <p>3,500.00</p>
            </div>
            <div className=" justify-between flex">
              <h1>Daily Income</h1>
              <p>1000</p>
            </div>
            <div className=" justify-between flex">
              <h1>Revenue Days</h1>
              <p>10,000</p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block w-full text-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Invest
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
