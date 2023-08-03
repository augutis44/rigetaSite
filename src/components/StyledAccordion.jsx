import { Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

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
};

const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
        boxShadow: 'none', // this styles directly apply to accordion
        border: `1px solid gray`,
        '.MuiAccordionDetails-root': {},
        '.MuiAccordionSummary-root': {}, // this apply to Summary
    };
});

const StyledAccordion = ({ accordionItem, expanded, handleChange }) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    const { label, title, body } = accordionItem;

    return (
        <CustomAccordion expanded={expanded === label} onChange={handleChange}>
            <StyledAccordionSummary>
                <Typography variant={isDownSm ? 'h6' : 'h5'}>{title}</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                    {body}
                </Typography>
            </AccordionDetails>
        </CustomAccordion>
    )
}

export default StyledAccordion;
