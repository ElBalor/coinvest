import Image from "next/image";
import React from "react";

export const dailyPlans = [
  {
    title: "Vip",
    name: "Bronze",
    amount: "#3,500, #1000",
    day: "10days",
    amounts: "10,000",
  },
  {
    silv: "Silver",
    asmount: "10,000, 2000",
    sday: "10days",
    samounts: "20,000",
  },
  {
    title: "Vip2",
    gname: "Gold",
    gamount: "20,000, 3500",
    gday: "10days",
    gamounts: "35000",
  },
  {
    title: "Vip3",
    name: "Diamond",
    amount: "50,000, 8000",
    day: "10days",
    amounts: "80000",
  },
];

export const monthlyPlans = [
  {
    name: "Mint coin",
    amount: "3000,700",
    day: "30days",
    amounts: "21,000",
  },
  {
    name: "Mini coin",
    amount: "7000,1200",
    day: "30days",
    amounts: "54days",
  },
  {
    name: "Mega Coin",
    amount: "30,000, 3400",
    day: "30days",
    amounts: "102,000",
  },
];

interface props {
  image: string;
  description: string;
  title: string;
  tits: string;
  days: string;
  amount: number;
}
const Card = ({ image, description, title, amount, tits, days }: props) => {
  return (
    <div className="max-w-lg rounded-md overflow-hidden shadow-lg  border border-black/25 pt-8">
      <h1 className="mb-5 top-0 text-pretty text-blue-700">
        Energy product leasing
      </h1>
      <Image className="w-full" src={image} width={80} height={80} alt="pip" />
      <div className="px-6 py-4">
        <div className="justify-between">
          <div className="font-bold text-xl mb-2">{title}</div>
          <h1 className="text-gray-700 text-base">{description}</h1>
          <p>{amount}</p>
          <p>{days}</p>
          <p>{tits}</p>
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

export default Card;
