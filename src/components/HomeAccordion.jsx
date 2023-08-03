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
            <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
                marginLeft: '1rem',
                marginBottom: '2rem',
                fontWeight: '400',
                textAlign: 'center',
            }}>
                Papildoma informacija
            </Typography>
            <AccordionLogic accordionItems={accordionItems}>
            </AccordionLogic>
        </SideBox>
    )
}

export default HomeAccordion;
