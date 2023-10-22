import { useState } from "react";
import apparelProducts from "../apparel/apparelProduct";


const Product = (props) => {

  const initialItemStates = apparelProducts.reduce((acc, item) => {
    return { ...acc, [item]: false };
  }, {});
  const [itemStates, setItemStates] = useState(initialItemStates);

  const handleToggleState = (item, index) => {
    setItemStates((prevItemStates) => ({
      [item]: !prevItemStates[item],
    }));
    console.log("====", itemStates[item]);
    props.handleSelection(itemStates[item], index);
  };

  // const changeFlag = (index) => {

    // if (flag) {
    //   setFlag(false);
    //   props.handleSelection(false);
    // } else {
    //   setFlag(true);
    //   props.handleSelection(true);
    // }
    // console.log(index);
  // };



  return (
    <div className="md:w-min">
      <h1 className="text-white text-2xl mt-4 md:text-center">Styles</h1>
      <div className="flex gap-2 flex-wrap items-center">
      {apparelProducts.map((item, index) => (
        
        <div
          onClick={() => handleToggleState(itemStates[item], index) }
          className={itemStates[item] ? "flex w-48 h-48 md:w-32 md:h-32 py-6 my-2 px-4 justify-center items-center rounded-lg bg-black bg-blend-soft-light backdrop-blur-sm active:bg-black/10" : "flex w-48 h-48 md:w-32 md:h-32 py-6 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm active:bg-black/10"}>
          <img src={require("../../assets/apparel/" + item.image + ".svg")} alt="" />
        </div>
      ))}
        {/* <div 
          className={"flex w-48 h-48 md:w-32 md:h-32  py-4 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm"}>
          <img src={apparel2} alt=""  />
        </div>
        <div className="flex w-40 h-48 md:w-32 md:h-32  py-4 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={apparel3} alt=""  />
        </div>
        <div className="flex w-40  h-48 md:w-32 md:h-32  py-4 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm">
          <img src={apparel4} alt="" className="w-auto h-full" />
        </div> */}
      </div>
    </div>
  );
};

export default Product;
