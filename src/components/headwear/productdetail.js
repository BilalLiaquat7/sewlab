import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styles from  './styles';

const ProductDetail = () => {
  return (
    <>
      <div className="mt-16 w-11/12 md:hidden">
        {/* Fundamentals */}
        <Accordion
          sx={{
            backgroundColor: "transparent",
            color: "white",
            padding: "0"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon
              sx={{ color: "white" }}
            />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Fundamentals</Typography>
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
          sx={{
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How to order ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <span>01. Submit Design</span>
                <br />
                Our client offers design templates and the option to work with our
                department to create customized ar work.
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
      <div className='md:mt-24 md:w-[95%] w-11/12  md:flex '>
        <Styles />
        <div className='md:w-[90%] hidden'>
          <h1>product detail</h1>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
