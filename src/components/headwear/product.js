import cap from "../../assets/cap.png";

const Product = () => {
  return (
    <div className='md:w-[10%]'>
    <h1 className="text-white text-2xl mt-4 text-center">Styles</h1>
      <div className="flex gap-[4%] flex-wrap items-center">
        <div className="flex w-[48%] md:w-[100%] py-2 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={cap} alt="" className="w-auto h-full" />
        </div>
        <div className="flex w-[48%] md:w-[100%] py-2 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={cap} alt="" className="w-auto h-full" />
        </div>
        <div className="flex w-[48%] md:w-[100%]  py-2 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={cap} alt="" className="w-auto h-full" />
        </div>
        <div className="flex w-[48%] md:w-[100%]  py-2 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={cap} alt="" className="w-auto h-full" />
        </div>
      </div>
    </div>
  );
};

export default Product;
