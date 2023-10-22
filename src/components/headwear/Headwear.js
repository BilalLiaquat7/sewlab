import Navbar from "./Navbar";
import ProductDetail from "./productdetail";

const Headwear = () => {
  return (
    <>
    <div className="w-screen head-img flex pb-4 pt-8 items-center flex-col md:bg-no-repeat">
      <Navbar />
      <ProductDetail />
    </div>
    </>
  );
};

export default Headwear;
