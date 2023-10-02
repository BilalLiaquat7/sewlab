import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styles from "./styles";
import cap from "../../assets/cap.png";
import side1 from "../../assets/apparel/shirtbanner.png";
import side2 from "../../assets/sides/2.png";
import side3 from "../../assets/sides/3.png";
import side4 from "../../assets/sides/4.png";
import side5 from "../../assets/sides/5.png";
import color1 from "../../assets/apparel/color1.svg";
import color2 from "../../assets/apparel/color2.svg";
import color3 from "../../assets/apparel/color3.svg";
import color4 from "../../assets/apparel/color4.svg";
import color5 from "../../assets/apparel/color5.svg";
import color6 from "../../assets/apparel/color6.svg";
import color7 from "../../assets/apparel/color7.svg";
import color8 from "../../assets/apparel/color8.svg";
import colorImages from "./data";

const ProductDetail = () => {
  const [selected, setSelected] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSelection = (flag) => {
    setSelected(flag);
    console.log(selected);
  };

  return (
    <>
      <div className="mt-16 pb-1 w-11/12 mb-4 md:hidden">
        {/* Fundamentals */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            color: "white",
            boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h6">Fundamentals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <span>Minimum Order</span>
                <br />
                72 pc total order (24 pc per color way)
              </div>
              <div>
                <br />
                <span>Minimum Order</span>
                <br />
                72 pc total order (24 pc per color way)
              </div>
              <div>
                <br />
                <span>Minimum Order</span>
                <br />
                72 pc total order (24 pc per color way)
              </div>
              <div>
                <br />
                <span>Minimum Order</span>
                <br />
                72 pc total order (24 pc per color way)
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* How to Order */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor: "transparent",
            color: "white",
            boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography variant="h6">How to order ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <span>01. Submit Design</span>
                <br />
                Our client offers design templates and the option to work with
                our department to create customized ar work.
              </div>
              <div>
                <br />
                <span>02. Price Quote</span>
                <br />
                Once your artwork is finalized you'll received price quote.
              </div>
              <div>
                <br />
                <span>03. Production</span>
                <br />
                After finalizing payment for your order, we will insure proper
                preparation for production with a physical sample for approval.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="md:mt-16 md:w-[95%] w-11/12 md:gap-4  md:flex ">
        <Styles handleSelection={handleSelection} />
        {selected ? (
          <div id="growth" className="md:w-[90%] pl-[3%] justify-start mt-5 md:flex-col">
            <h1 className="text-white md:text-left text-xl items-start text-center">
              Sides
            </h1>
            <div className="hidden md:flex gap-[1%] flex-wrap items-center">
              <div className="flex w-[48%] md:w-[100%] py-10 my-2 px-4 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm  ">
                <img src={side1} alt="" className="w-auto h-full" />
              </div>
            </div>
            <h1 className="text-white md:text-left text-xl items-start text-center mt-[1.5%]">
              Available Colors
            </h1>
            <div className="hidden md:flex gap-[1%] flex-wrap items-center">
              {colorImages.map((item, index) => (
                <div className="flex md:gap-2 md:flex-col w-[48%] md:w-[4.5%] py-[10px] px-[2px] my-2 justify-center items-center rounded-lg bg-[#00000042] bg-blend-soft-light backdrop-blur-sm  ">
                  <img
                    src={require("../../assets/apparel/" + item.image + ".svg")}
                    alt=""
                    className="w-auto h-full"
                  />
                </div>
              ))}
            </div>
            <h1 className="text-white md:text-left text-xl items-start text-center mt-[1.5%]">
              Sizes
            </h1>
            <div className="flex gap-2">
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-7 py-4 rounded-md md:my-2">
                XS
              </button>
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-8 py-4 rounded-md md:my-2">
                S
              </button>
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-8 py-4 rounded-md md:my-2">
                M
              </button>
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-8 py-4 rounded-md md:my-2">
                L
              </button>
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-7 py-4 rounded-md md:my-2">
                XL
              </button>
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-6 py-4 rounded-md md:my-2">
                2XL
              </button>
              <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-6 py-4 rounded-md md:my-2">
                3XL
              </button>
            </div>
            <h1 className="text-white md:text-left text-xl items-start text-center mt-[1.5%]">
              Download design template
            </h1>
            <button className="hidden md:bg-black md:text-white md:text-xl md:flex px-8 py-2 rounded-md md:my-2">
              Design Template
            </button>
            <h1 className="text-white md:text-left text-xl items-start text-center mt-[1.5%]">
              Specifications 
            </h1>
            <div className="md:w-[100%] hidden md:flex md:flex-col md:pt-4 md:gap-4">
              <div className="flex w-full gap-4">
                <div className="flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white">
                  <h1 className="text-base font-bold pl-6">FABRIC</h1>
                  <div className="gap-3">
                    <div className="pl-6 pt-3 flex flex-col gap-2">
                      <p>
                        24 single, 5.5 oz., soft-washed, 100% combed ring-spun
                        cotton, except Athletic Heather (85%/15%
                        cotton/viscose), Black Graphite Heather (80% cotton/20%
                        polyester), and all other Heathers (60% cotton/40%
                        polyester).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white">
                  <h1 className="text-base font-bold pl-6">FEATURES</h1>
                  <div className="gap-3">
                    <div className="pl-6 pt-3 flex flex-col gap-2">
                      <p>
                        Ultra soft hand, side-seamed, tightly knit, superior
                        printability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white">
                  <h1 className="text-base font-bold pl-6">LABEL</h1>
                  <div className="gap-3">
                    <div className="pl-6 pt-3 flex flex-col gap-2">
                      <p>Tear-away</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-3 rounded-lg self-stretch bg-black/20 bg-blend-soft-light gap-2 text-white">
                <h1 className="text-base font-bold pl-6">CASE QUANTITY</h1>
                <div className="gap-3">
                    <div className="pl-6 pt-3 flex flex-col gap-2">
                      <p>72Pcs</p>
                    </div>
                  </div>
              </div>
            </div>
            <h1 className="text-white md:text-left text-xl items-start text-center mt-[1.5%]">
              Pricing 
            </h1>
            <div className="flex flex-col p-3 md:mt-4 rounded-lg self-stretch bg-black/20 bg-blend-soft-light gap-2 text-white">
                <h1 className="text-base font-bold pl-6">CASE QUANTITY</h1>
                <div className="gap-3">
                    <div className="pl-6 pt-3 flex flex-col gap-2">
                      <p>72Pcs</p>
                    </div>
                  </div>
              </div>
          </div>
        ) : (
          <div className="md:w-[90%] md:pl-[3%] hidden md:flex md:flex-col md:pt-14 md:gap-4">
            <div className="flex w-full gap-4">
              <div className="flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white">
                <h1 className="text-base font-bold">Fundamentals</h1>
                <div className="gap-3">
                  <div className="p-6 flex flex-col gap-2">
                    <h2 className="text-base font-bold">Minimum Order</h2>
                    <p>72 pc total order (24 pc per colorway)</p>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h2 className="text-base font-bold">Setup Fees</h2>
                    <p>$38.00 (up to 20K stitches)</p>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h2 className="text-base font-bold">Sample Fees</h2>
                    <p>72 pc total order (24 pc per colorway)</p>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h2>Sample Leadtime</h2>
                    <p>10 days*</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white">
                <h1 className="text-base font-bold">How to order ?</h1>
                <div className="gap-3">
                  <div className="p-6 flex flex-col gap-2">
                    <h2 className="text-base font-bold">01. Submit Design</h2>
                    <p>
                      Our Company offers design templates and the option to work
                      with our art department to create customized artwork.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h2 className="text-base font-bold">02. Price Quote</h2>
                    <p>
                      Once your artwork is finalized you’ll a receive price
                      quote.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h2 className="text-base font-bold">03. Production</h2>
                    <p>
                      After finalizing payment for your order, we will ensure
                      proper preparation for production with a physical sample
                      for approval
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3 rounded-lg self-stretch bg-black/20">
              <p className="text-white">
                <span>*</span> Lead times are approximate and vary throughout
                the year if you have a deadline, please consult with your
                account manager in advance
              </p>
              <p className="text-white">
                <span>*</span> Production lead time is after sample approval
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;