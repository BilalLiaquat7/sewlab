import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import logoNav from "../assets/logoNav.png";
export default function Navbar() {
  const [nav, setNav] = useState(false);
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
    <div className="text-black flex justify-between h-24 max-w-[1240px] mx-auto px-4 items-center ">
      <img
        className="flex cursor-pointer"
        src={logo}
        alt=""
        style={{ width: 200, height: 60 }}
      />
      <ul
        className="hidden md:flex justify-end "
        style={{ alignItems: "center" }}
      >
        <li className="cursor-pointer hover:text-white li">
          <a href="#shah">HOME</a>
        </li>
        <li className="cursor-pointer hover:text-white li">
          <a href="#shah">ABOUT US</a>
        </li>
        <li className="cursor-pointer  hover:text-white li">
          <a href="#shah">CLIENTS</a>
        </li>
        <li className="cursor-pointer hover:text-white li">
          <a href="#shah">SERVICES</a>
        </li>
        <li className="cursor-pointer  hover:text-white li">
          <a href="#shah">CONTACT</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[25%] h-full border-r border-r-gray-900 bg-[#103C41] ease-in-out duration-500 z-30"
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
