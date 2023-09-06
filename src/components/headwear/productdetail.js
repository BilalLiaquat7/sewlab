import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styles from "./styles";

const ProductDetail = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
            boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.15)'
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
            boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.15)'
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
        <Styles />
        <div className='md:w-[90%] hidden md:flex md:flex-col md:pt-14 md:gap-4'>
          <div className='flex w-full gap-4'>
            <div className='flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white'>
              <h1 className='text-base font-bold'>Fundamentals</h1>
              <div className='gap-3'>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-base font-bold'>Minimum Order</h2>
                  <p>72 pc total order (24 pc per colorway)</p>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-base font-bold'>Setup Fees</h2>
                  <p>$38.00 (up to 20K stitches)</p>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-base font-bold'>Sample Fees</h2>
                  <p>72 pc total order (24 pc per colorway)</p>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                    <h2>Sample Leadtime</h2>
                    <p>10 days*</p>
                </div>
              </div>
            </div>
            <div className='flex flex-1 p-4 flex-col rounded-lg bg-black/20 bg-blend-soft-light gap-2 text-white'>
              <h1 className='text-base font-bold'>How to order ?</h1>
              <div className='gap-3'>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-base font-bold'>01. Submit Design</h2>
                  <p>Our Company offers design templates and the option to work with our art department to create customized artwork.</p>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-base font-bold'>02. Price Quote</h2>
                  <p>Once your artwork is finalized you’ll a receive price quote.</p>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-base font-bold'>03. Production</h2>
                  <p>After finalizing payment for your order, we will ensure proper preparation for production with a physical sample for approval</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-3 rounded-lg self-stretch bg-black/20'>
            <p className='text-white'><span>*</span> Lead times are approximate and vary throughout the year if you have a deadline, please consult with your account manager in   advance</p>
            <p className='text-white'><span>*</span> Production lead time is after sample approval</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
