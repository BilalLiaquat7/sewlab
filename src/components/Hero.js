import sewMachine from "../assets/sew_machine.png";
import buttons from "../assets/buttons.jpeg";
import thread from "../assets/thread.jpeg";
import web from "../assets/web.jpeg";
import camera from "../assets/camera.jpeg";
import sprint from "../assets/sprint.jpg";
import hat from "../assets/hat.jpg";
import cloths from "../assets/cloths.jpg";

export default function Hero() {
  return (
    <div
      className="flex-1 h-2/5 justify-center relative text-center"
      style={{ height: "85vh", width: "100%" }}
    >
      <img
        src={sewMachine}
        alt="Sew Machine"
        style={{ height: "100vh", width: "100%" }}
      />
      <div className="p-12 flex-col items-center justify-end text-end rounded-md absolute bottom-1/3 bg-gray-950/20">
        {/* <div className="gap flex-col absolute bottom-1/4 pr-16 md:pr-16 lg:px-80 lg:py-36 w-full items-center justify-center text-end"> */}
          <div className="textGap">
            <h1 class="text-white font-semibold text-2xl md:text-3xl">
              QUALITY.
            </h1>
            <h1 class="text-white font-semibold text-2xl md:text-3xl">
              CONSISTENCY.
            </h1>
            <h1 class="text-white font-semibold text-2xl md:text-3xl">
              CUSTOMER SERVICE.
            </h1>
          </div>
          <div className="flex justify-end">
            <button
              style={{ width: "fit-content" }}
              className="bg-transparent px-12 py-3 mt-4 rounded-[100px] border-2 border-white text-white hover:text-white hover:bg-black"
            >
              LOGIN
            </button>
          </div>
      </div>
      <div className="flex p-8 w-full sm:absolute lg:justify-between md:flex-row md:absolute lg:absolute lg:-bottom-40 items-end">
        <div className="relative img hover:scale-105 duration-300">
          <img className="rounded-md" src={buttons} alt="" />
          <div class=" rounded-md absolute bottom-0 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold py-1 lg:py-0 text-3xl sm:text-lg md:text-lg lg:text-lg">
              Headwear
            </h1>
          </div>
        </div>
        <div className="relative img hover:scale-105 duration-300">
          <img className="rounded-md" src={camera} alt="" />
          <div class=" rounded-md absolute bottom-0 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold py-1 lg:py-0 text-3xl sm:text-lg md:text-lg lg:text-lg">
              Apparel
            </h1>
          </div>
        </div>
        <div className="relative img hover:scale-105 duration-300">
          <img className="rounded-md" src={thread} alt="" />
          <div class=" rounded-md absolute bottom-0 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold py-1 lg:py-0 text-3xl sm:text-lg md:text-lg lg:text-lg">
              Programs
            </h1>
          </div>
        </div>
        <div className="relative img hover:scale-105 duration-300">
          <img className="rounded-md" src={web} alt="" />
          {/* <div class=" rounded-md absolute bottom-0 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold py-1 lg:py-0 text-3xl sm:text-lg md:text-lg lg:text-lg">
              Fullfilment
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}
