import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import logoNav from "../assets/logoNav.png";
export default function Navbar() {
  const [nav, setNav] = useState(true);
  // const [isHover, setIsHover] = useState(false);

  //  const handleMouseEnter = () => {
  //     setIsHover(true);
  //  };
  //  const handleMouseLeave = () => {
  //     setIsHover(false);
  //  };

  // const menuHover = {
  //   backgroundColor: isHover ? 'green' : '',
  //   padding: '36px 20px',
  //   alignItems: 'center',
  //   transform: 'skew(-20deg)'
  // }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black md:justify-end top-4 right-2 sm:top-0 md:right-16 lg:right-16 absolute flex h-24 max-w-[1240px] mx-auto w-full px-4  z-10 ">
      <img
        className="absolute left-4 top-2 h-8 md:hidden"
        src={logoNav}
        alt=""
      />
      <ul
        className="hidden md:flex justify-end "
        style={{ alignItems: "center" }}
      >
        <li className="cursor-pointer text-white hover:text-white li">
          <a href="#home">HOME</a>
        </li>
        <li className="cursor-pointer text-white hover:text-white li">
          <a href="#shah">ABOUT US</a>
        </li>
        <li className="cursor-pointer text-white hover:text-white li">
          <a href="#shah">CLIENTS</a>
        </li>
        <li className="cursor-pointer text-white hover:text-white li">
          <a href="#shah">SERVICES</a>
        </li>
        <li className="cursor-pointer text-white hover:text-white li">
          <a href="#shah">CONTACT</a>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block md:hidden z-30 absolute top-2 right-4"
      >
        {!nav ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <AiOutlineMenu size={25} color="white" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#103C41] ease-in-out duration-500 z-30"
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
          <li className=" p-4 cursor-pointer hover:text-black border-b border-gray-300">
            {/* <Link to="/">Home</Link> */}
            HOME
          </li>
          <li className="p-4 cursor-pointer hover:text-black border-b border-gray-300">
            {/* <Link to="/about">Company</Link> */}
            ABOUT US
          </li>
          <li className="p-4 cursor-pointer  hover:text-black border-b border-gray-300">
            {/* <Link to="/catalogue">Resources</Link> */}
            CLIENTS
          </li>
          <li className="p-4 cursor-pointer hover:text-black border-b border-gray-300">
            {/* <Link to="/contact-us">About</Link> */}
            SERVICES
          </li>
          <li className="p-4 cursor-pointer  hover:text-black border-b border-gray-300">
            {/* <Link to="/contact-us">Contact</Link> */}
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}
