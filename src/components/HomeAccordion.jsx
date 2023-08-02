import { Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { SideBox } from "../helpers/StyledBox";
import useMediaQuery from '@mui/material/useMediaQuery';
import AccordionLogic from "./AccordionLogic";

const accordionItems = [
    {
        label: 'panel1',
        title: 'Europos sąjungos teisės aktai',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.'
    },
    {
        label: 'panel2',
        title: 'Dar kažkokie aktai',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.'
    },
    {
        label: 'panel3',
        title: 'Visokie aktai apie buhalterija',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.'
    }
]

const HomeAccordion = () => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

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
                    Papildoma informacija
                </Typography>
                <AccordionLogic accordionItems={accordionItems}>
                </AccordionLogic>
            </Grid>
        </SideBox>
    )
}

export default HomeAccordion;

