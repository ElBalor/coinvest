"use client";
import React from "react";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-2 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:h-screen rounded-full">
      {/* inner div */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-gradient-to-r from-[#9490a8] to-[#615c7a] text-3xl xl:text-xl xl:rounded-full rounded-md">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-cyan-300"
              } relative flex items-center group hover:text-accent transion-all duration-300`}
              href={link.path}
              key={index}
            >
              {/*tooltip*/}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white/20 relative flex text-white items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-purple-500 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/*icon*/}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
