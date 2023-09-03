import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";

const Headwear = () => {
  return (
    <>
    <div className="w-screen h-screen head-img flex pb-4 items-center flex-col md:bg-no-repeat">
      <Navbar />
      <ProductDetail />
    </div>
    </>
  );
};

export default Headwear;
