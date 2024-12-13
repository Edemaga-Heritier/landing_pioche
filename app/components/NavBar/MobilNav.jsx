import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import { MdClear } from "react-icons/md";
const MobilNav = () => {
  return (
    <div>
      {/* overlay */}
      <div className="fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen "></div>
      {/* NavLinks */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60% bg-indigo-900 space-y-6 z-[1000]">
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="nav_link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      {/* close icon */}
      <MdClear className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6" />
    </div>
  );
};

export default MobilNav;
