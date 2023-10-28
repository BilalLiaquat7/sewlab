import { useState } from "react";
import apparelProducts from "../apparel/apparelProduct";

const initialItemStates = apparelProducts.reduce((acc, item) => {
  return { ...acc, [item]: false };
}, {});

const Product = (props) => {
  const [itemStates, setItemStates] = useState(initialItemStates);

  const handleToggleState = (item, index) => {
    console.log("I'm clicked...");

    setItemStates((prevItemStates) => {
      // Create a copy of the previous state
      const updatedItemStates = { ...prevItemStates };
      // Toggle the state of the specific item
      updatedItemStates[item] = !prevItemStates[item];
      // Call the function with the updated state
      props.handleSelection(updatedItemStates[item], index);
      return updatedItemStates;
    });
  };

  return (
    <div className="md:w-min md:h-screen md:overflow-scroll">
      <h1 className="text-white text-2xl mt-4 md:text-center">Styles</h1>
      <div className="flex gap-2 flex-wrap items-center">
        {apparelProducts.map((item, index) => (
          <div
            onClick={() => handleToggleState(itemStates[item], index)}
            className={
              itemStates[item]
                ? "flex w-48 h-48 md:w-32 md:h-32 py-6 my-2 px-4 justify-center items-center rounded-lg bg-black bg-blend-soft-light backdrop-blur-sm active:bg-black/10"
                : "flex w-48 h-48 md:w-32 md:h-32 py-6 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm active:bg-black/10"
            }
          >
            <img
              src={require("../../assets/apparel/" + item.image + ".svg")}
              alt=""
            />
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
