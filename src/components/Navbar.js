import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import logoNav from "../assets/logoNav.png";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black flex justify-between h-24 max-w-[1240px] mx-auto px-4 items-center ">
      <img
        className="flex cursor-pointer"
        src={logo}
        alt=""
        style={{ width: 200, height: 60 }}
      />
      <ul className="hidden md:flex space-x-12 justify-end ">
        <li className="cursor-pointer hover:bg-slate-500">
          {/* <Link to="/">Home</Link> */}
          HOME
        </li>
        <li className="cursor-pointer hover:text-pink-600">
          {/* <Link to="/about">Company</Link> */}
          ABOUT US
        </li>
        <li className="cursor-pointer  hover:text-pink-600">
          {/* <Link to="/catalogue">Resources</Link> */}
          CLIENTS
        </li>
        <li className="cursor-pointer hover:text-pink-600">
          {/* <Link to="/contact-us">About</Link> */}
          SERVICES
        </li>
        <li className="cursor-pointer  hover:text-pink-600">
          {/* <Link to="/contact-us">Contact</Link> */}
          CONTACT
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#103C41] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          className="flex cursor-pointer my-3"
          src={logoNav}
          alt=""
          style={{ width: 150, height: 50 }}
        />
        <ul className="p-4 text-white uppercase">
          <li className=" p-4 cursor-pointer hover:text-pink-600 border-b border-gray-300">
            {/* <Link to="/">Home</Link> */}
            HOME
          </li>
          <li className="p-4 cursor-pointer hover:text-pink-600 border-b border-gray-300">
            {/* <Link to="/about">Company</Link> */}
            ABOUT US
          </li>
          <li className="p-4 cursor-pointer  hover:text-pink-600 border-b border-gray-300">
            {/* <Link to="/catalogue">Resources</Link> */}
            CLIENTS
          </li>
          <li className="p-4 cursor-pointer hover:text-pink-600 border-b border-gray-300">
            {/* <Link to="/contact-us">About</Link> */}
            SERVICES
          </li>
          <li className="p-4 cursor-pointer  hover:text-pink-600 border-b border-gray-300">
            {/* <Link to="/contact-us">Contact</Link> */}
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}
