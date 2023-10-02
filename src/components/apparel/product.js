import { useState } from "react";
import apparel1 from "../../assets/apparel/apparel1.png";
import apparel2 from "../../assets/apparel/apparel2.svg";
import cap2 from "../../assets/styles/2.png";
import cap3 from "../../assets/styles/3.png";
import cap4 from "../../assets/styles/4.png";


const Product = (props) => {
  const [flag, setFlag] = useState(false);

  const changeFlag = () => {
    if (flag) {
      setFlag(false);
      props.handleSelection(false);
    } else {
      setFlag(true);
      props.handleSelection(true);
    }
  };

  

  return (
    <div className="md:w-[10%]">
      <h1 className="text-white text-2xl mt-4 md:text-center">Styles</h1>
      <div className="flex gap-[4%] flex-wrap items-center">
        <div
          onClick={changeFlag}
          className={flag ? "flex w-[48%] md:w-[100%] py-2 my-2 px-4 justify-center items-center rounded-lg bg-black bg-blend-soft-light backdrop-blur-sm active:bg-black/10" : "flex w-[48%] md:w-[100%] py-2 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm active:bg-black/10"}>
          <img src={apparel1} alt="" className="w-auto h-full" />
        </div>
        <div className="flex w-[48%] md:w-[100%] py-4 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={apparel2} alt="" className="w-auto h-full" />
        </div>
        <div className="flex w-[48%] md:w-[100%]  py-4 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={cap3} alt="" className="w-auto h-full" />
        </div>
        <div className="flex w-[48%] md:w-[100%]  py-4 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={cap4} alt="" className="w-auto h-full" />
        </div>
      </div>
    </div>
  );
};

export default Product;
