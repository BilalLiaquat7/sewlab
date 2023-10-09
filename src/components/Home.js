import { Link } from "react-router-dom";
import cap from "../assets/cap.png";
import apparel1 from "../assets/apparel/apparel1.svg";
import logo from "../assets/logoNav.png";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='hero-img'>
        <div className="w-screen md:h-screen flex pb-4 pt-1 items-center flex-col md:justify-center md:bg-no-repeat">
          <div className="flex p-3 mt-16 justify-between items-end rounded-xl bg-blend-soft-light bg-[#00000042] w-11/12 h-36 md:mt-0 md:mb-32 md:flex-col md:h-fit md:gap-6 md:w-fit md:justify-center">
            <div className="flex flex-col justify-center items-start">
              <img src={logo} alt="" className="hidden md:flex md:pb-8" />
              <div className="flex w-max md:w-full px-3 py-1 items-start gap-3 self-stretch justify-start md:justify-center">
                <p className="text-white hover:bg-black md:px-3 md:py-1 md:rounded-md">
                  QUALITY
                </p>
              </div>
              <div className="flex w-max md:w-full px-3 py-1 items-start gap-3 self-stretch justify-start md:justify-center">
                <p className="text-white hover:bg-black md:px-3 md:py-1 md:rounded-md">
                  CONSISTENCY{" "}
                </p>
              </div>
              <div className="flex w-max md:w-full px-3 py-1 items-start gap-3 self-stretch justify-start md:justify-center">
                <p className="text-white hover:bg-black md:px-3 md:py-1 md:rounded-md">
                  CUSTOMER SERVICE
                </p>
              </div>
            </div>
            <div className="flex w-full justify-end md:justify-center">
              <button className="flex py-2 px-2 items-start gap-2 text-white bg-transparent border rounded-lg w-20 justify-center md:text-white hover:bg-black">
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-4 px-6 flex-col items-center gap-5 w-screen md:flex-row md:justify-between md:fixed md:bottom-8">
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light  hover:scale-105 duration-300">
            <Link to="/headwear"><img src={cap} alt="" className="w-auto h-full" /></Link>
          </div>
          <div className="flex py-4 px-16 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light hover:scale-105 duration-300">
            <Link to="/apparel"><img src={apparel1} alt="" className="w-auto h-full" /></Link>
          </div>
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light hover:scale-105 duration-300">
            <img src={cap} alt="" className="w-auto h-full " />
          </div>
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light hover:scale-105 duration-300">
            <img src={cap} alt="" className="w-auto h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
