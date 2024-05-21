import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdOutlineArrowOutward } from "react-icons/md";

const Acardion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleMouseEnter = (panel) => {
    setExpanded(panel);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onMouseEnter={() => handleMouseEnter("panel1")}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal text-[19px]">
            Fitness & wellness
          </Typography>
          <Typography className="w-[50%] underline font-semibold !text-[25px]">
            ClassPass
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%] font-normal text-[19px] text-[#ebebed]">
            Fitness & wellness
          </Typography>
          <div>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              A boutique fitness membership app, ClasPass provides access to
              in-studio <br /> workouts, beauty and wellness appointments, and
              on-demand exercise classes.
            </Typography>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              <img
                className="w-[700px] h-[300px]"
                src="https://www.disciplemedia.com/wp-content/uploads/2019/07/madison-lavern-4gcqRf3-f2I-unsplash-scaled-wpv_1000x400_center_center.jpg"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onMouseEnter={() => handleMouseEnter("panel2")}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal text-[19px]">
            Food & beverage
          </Typography>
          <Typography className="w-[50%] underline font-semibold !text-[25px]">
            Bevi
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%] font-normal text-[19px] text-[#ebebed]">
            Food & beverage
          </Typography>
          <div>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              A techstars graduate, Bevi installs smart water dispensers in
              modern offices, <br /> turning filtered tap water into delicious
              fizzy drinks and promoting greater <br /> sustainability in the
              workplace.
            </Typography>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              <img
                className="w-[700px] h-[400px]"
                src="https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/ww-hydration-hub.jpg"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onMouseEnter={() => handleMouseEnter("panel3")}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal text-[19px]">
            Fintech
          </Typography>
          <Typography className="w-[50%] underline font-semibold !text-[25px]">
            Dealcloud
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%] font-normal text-[19px] text-[#ebebed]">
            Fintech
          </Typography>
          <div>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              Dealcloud equips professional and financial services firms with
              robust tools for <br /> optimizing deal execution and client
              relationship management.
            </Typography>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              <img
                className="w-[700px] h-[400px]"
                src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=sph"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onMouseEnter={() => handleMouseEnter("panel4")}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal text-[19px]">
            Healthtech
          </Typography>
          <Typography className="w-[50%] underline font-semibold !text-[25px]">
            Dialogue
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%] font-normal text-[19px] text-[#ebebed]">
            Healthtech
          </Typography>
          <div>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              A Canadian telemedicine startup, Dialogue's platform provides
              access to an <br /> expansive virtual medical team for unparalleled
              patient-centric care.
            </Typography>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              <img
                className="w-[700px] h-[400px]"
                src="https://thumbs.dreamstime.com/b/doctor-holding-digital-tablet-meeting-room-portrait-beautiful-mature-woman-looking-camera-confident-female-using-164999229.jpg"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onMouseEnter={() => handleMouseEnter("panel5")}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal text-[19px]">
            Healthtech
          </Typography>
          <Typography className="w-[50%] underline font-semibold !text-[25px]">
            Thirty Madison
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%] font-normal text-[19px] text-[#ebebed]">
            Healthtech
          </Typography>
          <div>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              Designed to help people to virtually manage their chronic
              conditions, Thirty <br />
              Madison's portfolio encompasses treatment for everything from
              migraines to hair <br />
              loss.
            </Typography>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              <img
                className="w-[700px] h-[400px]"
                src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/122239/122239_00_2x.jpg?20170601014818"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Acardion;
