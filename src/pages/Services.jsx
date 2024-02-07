
import Footer from "../components/footer/Footer";
import PacketCards from "../components/services/PacketCards";
import ServiceAccordion from "../components/services/ServiceAccordion";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import MainTitle from "../components/shared/MainTitle";
import AppBarStyled from "../components/navigationBar/AppBarStyled";
import { ScrollToTop } from "../components/shared/ScrollToTop";

const Services = () => {

    return (
        <>
            <ScrollToTop />
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
