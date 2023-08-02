import { useState } from "react";
import StyledAccordion from "./StyledAccordion";

const AccordionLogic = ({ accordionItems }) => {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        accordionItems.map((accordionItem) =>
            <StyledAccordion
                key={accordionItem.label}
                accordionItem={accordionItem}
                expanded={expanded}
                handleChange={handleChange(accordionItem.label)}>
            </StyledAccordion>
        )
    );
}

export default AccordionLogic;

