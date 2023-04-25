import React, { useState } from "react";
import { logo, menu, close } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="absolute top-10 md:top-12 left-1/2 p-5 gap-6 lg:gap-12 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full z-50">
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.slice(0, 2).map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-pink-400" : "text-gray-900"
            } mx-4 text-bold md:text-xs lg:text-sm text-gray-800 hover:text-pink-400 transition duration-300 cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={link.id}>{link.title}</a>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <Image src={logo} alt="logo" className="w-16 h-16 md:h-20 md:w-20" />
      </Link>
      <ul className="hidden list-none md:flex gap-10">
        {navLinks.slice(2, 4).map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-pink-400" : "text-gray-900"
            } mx-4 text-bold md:text-xs lg:text-sm text-gray-800 hover:text-pink-400 transition duration-300 cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={link.id}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
