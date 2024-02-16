import Image from "next/image";
import React from "react";

const Card3 = () => {
  return (
    <div className="max-w-lg rounded-md overflow-hidden shadow-lg bg-gradient-to-tr from-[#cec8e9] to-[#5d5581] border border-black/25 pt-8 mb-16">
      <Image
        className="w-full"
        src="/bronze.jpg"
        width={80}
        height={80}
        alt="pip"
      />
      <div className="px-6 py-4">
        <div className="justify-between">
          <div className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-black to-cyan-500">
            Diamond
          </div>
          <div className=" justify-between flex">
            <h1>Each Price</h1>
            <p>50,000.00</p>
          </div>
          <div className=" justify-between flex">
            <h1>Daily Income</h1>
            <p>8000.00</p>
          </div>
          <div className=" justify-between flex">
            <h1>Revenue Days</h1>
            <p>80,000</p>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block w-full text-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Invest
        </span>
      </div>
    </div>
  );
};

export default Card3;
