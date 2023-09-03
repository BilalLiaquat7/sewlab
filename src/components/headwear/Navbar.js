import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoNav from "../../assets/logoNav.png";
export default function Navbar() {

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black md:justify-between md:items-center top-4 md:top-0 absolute flex mx-auto w-11/12 z-10 md:z-0 ">

      <button className="hidden bg-black text-white md:flex px-8 py-1">Log in</button>
        <img
        className="left-4 top-2 h-8"
        src={logoNav}
        alt=""
      />

      <ul
        className="hidden md:flex md:pr-8 md:pl-8 justify-end"
        style={{ alignItems: "center" }}
        >
        <li className="cursor-pointer text-white hover:text-white li">
          <img src="" alt="" />
          Home
        </li>
        <li className="cursor-pointer text-white hover:text-white li">
          <img src="" alt="" />
          About us
        </li>
        <li className="cursor-pointer text-white hover:text-white li">
          <img src="" alt="" />
          CLients
        </li>
      </ul>


      <div
        onClick={handleNav}
        className="block md:hidden z-30 absolute right-4"
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
        </ul>
      </div>
    </div>
  );
}
