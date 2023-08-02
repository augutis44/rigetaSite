import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import { styled } from '@mui/material/styles';


const StyledAccordionSummary = ({ children }) => {
    return (
        <AccordionSummary expandIcon={<SlArrowRight />}
            sx={{
                "& .MuiAccordionSummary-content": { display: 'flex', justifyContent: 'space-between' },
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(90deg)' },
                '& .MuiAccordionSummary-expandIconWrapper': { marginRight: '1rem' },
                flexDirection: 'row-reverse'
            }}
        >
            {children}
        </AccordionSummary>
    )
}

const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
        boxShadow: 'none', // this styles directly apply to accordion
        border: `1px solid gray`,
        '.MuiAccordionDetails-root': {},
        '.MuiAccordionSummary-root': {}, // this apply to Summary
    };
});

const StyledAccordion = ({ accordionItem, expanded, handleChange }) => {
    const { label, title, body } = accordionItem;

    return (
        <CustomAccordion expanded={expanded === label} onChange={handleChange}>
            <StyledAccordionSummary>
                <Typography>{title}</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    {body}
                </Typography>
            </AccordionDetails>
        </CustomAccordion>
    )
}

export default StyledAccordion;

