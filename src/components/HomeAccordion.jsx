import { Container, TitleTypography } from "../helpers/StyledBox";
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

    return (
        <Container>
            <TitleTypography>
                Papildoma informacija
            </TitleTypography>
            <AccordionLogic accordionItems={accordionItems}>
            </AccordionLogic>
        </Container>
    )
}

export default HomeAccordion;
