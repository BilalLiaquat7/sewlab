import cap from "../assets/cap.png";
import logo from "../assets/logoNav.png";

export default function Home() {
  return (
    <>
      <div className="w-screen  h-screen hero-img flex pb-4 pt-1 items-center flex-col md:justify-end md:bg-no-repeat">
        <div className="flex p-3 mt-16 justify-between items-end rounded-xl bg-blend-soft-light bg-[#00000042] w-11/12 h-36 md:mb-52 md:flex-col md:h-fit md:gap-6 md:w-fit md:justify-center">
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
          <div className="flex w-1/2 justify-end md:justify-center">
            <button className="flex py-2 px-2 items-start gap-2 text-white bg-transparent border rounded-lg w-20 justify-center md:text-white hover:bg-black">
              LOGIN
            </button>
          </div>
        </div>
        <div className="flex pt-4 px-6 flex-col items-center gap-5 w-screen md:flex-row md:justify-between">
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
            <img src={cap} alt="" className="w-auto h-full" />
          </div>
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
            <img src={cap} alt="" className="w-auto h-full" />
          </div>
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
            <img src={cap} alt="" className="w-auto h-full " />
          </div>
          <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
            <img src={cap} alt="" className="w-auto h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
