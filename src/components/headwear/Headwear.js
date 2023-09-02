import Navbar from "./Navbar";
import { AiOutlineDown } from "react-icons/ai";

const Headwear = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen  h-screen head-img flex pb-4 items-center flex-col md:justify-end md:bg-no-repeat">
        {/* <div className="relative w-full m-5 overflow-hidden">
            <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
          <div className="flex items-center bg-blue-400 h-12 w-full m-5 mt-14 pl-5">
            <h1 className="text-lg font-semibold text-white">Fundamentals</h1>
          </div>
          {/* Arrow Icons
          <div className="absolute top-3 right-3 text-white transition-transform duration-500">
          <AiOutlineDown size={25} color="white" />
          </div>
          <div className="content bg-blue-200 overflow-hidden transition-all duration-500">
            <div className="p-5">
                <p>
                    Hello Fundamentals
                    Fundamental 1
                    Fundamental 2
                    Fundamental 3
                </p>
                <p>
                    Hello Fundamentals
                    Fundamental 1
                    Fundamental 2
                    Fundamental 3
                </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Headwear;
