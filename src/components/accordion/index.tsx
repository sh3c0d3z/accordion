import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "./data";

interface DataItem {
  utility: string;
  description: string;
}

export default function AccordionUsage() {
  return (
    <div>
      <h3>
        The Material UI Accordion component includes several complementary
        utility components to handle various use cases:
      </h3>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem: DataItem, index: number) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                {dataItem.utility}
              </AccordionSummary>
              <AccordionDetails>{dataItem.description}</AccordionDetails>
            </Accordion>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
