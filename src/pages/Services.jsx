
import Footer from "../components/Footer";
import PacketCards from "../components/PacketCards";
import ServiceAccordion from "../components/ServiceAccordion";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import MainTitle from "../components/MainTitle";
import AppBarStyled from "../components/AppBarStyled";

const Services = () => {

    return (
        <>
            <AppBarStyled />
            <MainTitle>Paslaugos</MainTitle>
            <WhiteBox />
            <BackBox>
                <PacketCards />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <ServiceAccordion />
            </BackBox>
            <WhiteBox />
            <Footer />
        </>
    );

}

export default Services;
