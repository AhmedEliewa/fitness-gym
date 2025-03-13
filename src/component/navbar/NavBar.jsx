import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { menuData } from "./menuData";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TfiAlignRight } from "react-icons/tfi";
import ResponsiveMenu from "./ResponsiveMenu";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="container flex justify-between items-center py-5">
        <div className="logo font-bold flex items-center space-x-2 text-2xl uppercase">
          <FaDumbbell />
          <p>fitness</p>
          <p className="text-primary">gym</p>
        </div>
        <ul className=" gap-2 hidden md:flex">
          {menuData.map((item) => (
            <li key={item.id}>
              <a
                className="capitalize font-semibold hover:text-secondary duration-500"
                href={item.link}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3 items-center">
          <button className="text-xl hover:bg-primary hover:text-white p-2 rounded-full duration-500">
            <FaSearch />
          </button>
          <button className="text-xl hover:bg-primary hover:text-white p-2 rounded-full duration-500">
            <FaCartShopping />
          </button>
          <button
            className="hover:bg-primary hover:text-white p-2  duration-500 
        rounded-md border-2 border-primary px-6 capitalize hidden md:block"
          >
            login
          </button>
        </div>
        {/* mobile mode */}
        <div
          className="block md:hidden cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TfiAlignRight />
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
}
