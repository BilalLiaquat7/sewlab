import sewMachine from "../assets/sew_machine.png";
import buttons from "../assets/buttons.jpeg";
import thread from "../assets/thread.jpeg";
import web from "../assets/web.jpeg";
import camera from "../assets/camera.jpeg";

export default function Hero() {
  return (
    <div
      className="flex-1 h-2/5 justify-center relative text-center my-2"
      style={{ height: "85vh", width: "100%" }}
    >
      <img
        src={sewMachine}
        alt="Sew Machine"
        style={{ height: "85vh", width: "100%" }}
      />
      <div className="gap flex-col absolute bottom-1/3 px-80 py-36 w-full items-end justify-end text-end">
        <div className="textGap">
          <h1 class="text-white font-semibold text-4xl">QUALITY.</h1>
          <h1 class="text-white font-semibold text-4xl">CONSISTENCY.</h1>
          <h1 class="text-white font-semibold text-4xl">CUSTOMER SERVICE.</h1>
        </div>
        <button
          style={{ width: "fit-content" }}
          className=" bg-transparent px-12 py-3 rounded-[100px] border-2 border-white text-white hover:text-white hover:bg-black"
        >
          LOGIN
        </button>
      </div>
      <div className="gap flex absolute -bottom-40 px-96 py-48 items-end">
        <div className="relative img hover:border-4">
          <img className="rounded-md" src={buttons} alt="" />
          <div class=" rounded-md absolute bottom-0 px-4 py-1 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold text-xl">Headwear</h1>
          </div>
        </div>
        <div className="relative img hover:border-4">
          <img className="rounded-md" src={camera} alt="" />
          <div class=" rounded-md absolute bottom-0 px-4 py-1 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold text-xl">Apparel</h1>
          </div>
        </div>
        <div className="relative img hover:border-4">
          <img className="rounded-md" src={thread} alt="" />
          <div class=" rounded-md absolute bottom-0 px-4 py-1 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold text-xl">Programs</h1>
          </div>
        </div>
        <div className="relative img hover:border-4">
          <img className="rounded-md" src={web} alt="" />
          <div class=" rounded-md absolute bottom-0 px-4 py-1 bg-gray-500/80 w-full">
            <h1 class="text-white font-semibold text-xl">Fullfilment</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
