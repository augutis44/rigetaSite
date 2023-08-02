import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { styled, useTheme } from '@mui/material/styles';
import { SideBox } from "../helpers/StyledBox";
import useMediaQuery from '@mui/material/useMediaQuery';

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

const ServiceAccordion = () => {
    const [expanded, setExpanded] = useState('panel1');
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <SideBox>
            <Grid sx={{
                maxWidth: '62rem',
                align: 'center',
                margin: 'auto'
            }}>
                <Typography variant={isDownSm ? 'h4' : 'h2'} sx={{
                    textAlign: 'center',
                    fontWeight: '400',
                    margin: '0rem 0rem 3rem'
                }}>
                    Kitos Paslaugos
                </Typography>
                <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <StyledAccordionSummary>
                        <Typography>Vyr. buhalterės konsultacija telefonu 30min</Typography>
                        <Typography>30€</Typography>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                >
                    <StyledAccordionSummary>
                        <Typography>Vyr. buhalterės konsultacija gyvai 30min</Typography>
                        <Typography>40€</Typography>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <StyledAccordionSummary>
                        <Typography>Projektų paraiškų pildymo konsultacija</Typography>
                        <Typography>50€</Typography>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <StyledAccordionSummary>
                        <Typography>Dar kažkokia nuostabi paslauga</Typography>
                        <Typography>100€</Typography>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
            </Grid>
        </SideBox>
    )
}

export default ServiceAccordion;

