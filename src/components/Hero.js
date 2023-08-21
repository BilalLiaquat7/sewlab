import sewMachine from "../assets/sew_machine.png";

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
      <div class="gap flex-col absolute bottom-1/3 px-80 py-48 w-full items-end justify-end text-end">
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
    </div>
  );
}
