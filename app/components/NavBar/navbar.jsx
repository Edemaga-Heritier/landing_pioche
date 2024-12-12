import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="w-full transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <h1 className="text-xl md:text-2xl font-extrabold">
          <span className="text-3xl md:text-4xl text-pink-700">P</span>ioche
        </h1>
        {/* navigation links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav_link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* button */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
            join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
