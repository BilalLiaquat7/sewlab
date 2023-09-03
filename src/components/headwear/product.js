import cap from '../../assets/cap.png'

const Product = () => {
  return (
    <div className="flex pt-4 px-6 flex-wrap items-center gap-5 w-4/5">
      <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
        <img src={cap} alt="" className="w-auto h-full" />
      </div>
      <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
        <img src={cap} alt="" className="w-auto h-full" />
      </div>
      <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
        <img src={cap} alt="" className="w-auto h-full" />
      </div>
      <div className="flex py-4 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm hover:scale-105 duration-300">
        <img src={cap} alt="" className="w-auto h-full" />
      </div>
    </div>
  );
};

export default Product;
