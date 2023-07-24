
import MainBar from "../components/mainBar";
import Footer from "../components/Footer";
import PacketCards from "../components/PacketCards";
import ServiceAccordion from "../components/ServiceAccordion";
import { Box } from "@mui/material";
import { WhiteBox } from "../helpers/StyledBox";

const Services = () => {

    return (
        <>
            <MainBar />
            <WhiteBox />
            <Box sx={{
                backgroundColor: '#F1FAEE',
                zIndex: '-1',
                padding: '2rem'
            }}>
                <PacketCards />
            </Box>
            <WhiteBox />
            <Box sx={{
                backgroundColor: '#F1FAEE',
                zIndex: '-1',
                padding: '2rem'
            }}>
                <ServiceAccordion />
            </Box>
            <WhiteBox />
            <Footer />
        </>
    );

}

export default Services;
