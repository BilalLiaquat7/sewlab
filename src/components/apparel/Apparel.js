import Navbar from "../headwear/Navbar";
import ProductDetail from "./productDetail";

const Apparel = () => {
  return (
    <>
    <div className="w-screen h-screen head-img flex pb-4 pt-8 items-center flex-col md:bg-no-repeat">
      <Navbar />
      <ProductDetail />
    </div>
    </>
  );
};

export default Apparel;
