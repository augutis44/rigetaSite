import MainPhoto from "../components/MainPhoto";
import Footer from "../components/Footer";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import AboutRigetaMain from "../components/AboutRigetaMain";
import ServicesMain from "../components/ServicesMain";
import HomeAccordion from "../components/HomeAccordion";
import AppBarStyled from "../components/AppBarStyled";
import PartnersMain from "../components/PartnersMain";
import { ScrollToTop } from "../components/ScrollToTop";

const Home = () => {

    return (
        <>
            <ScrollToTop/>
            <AppBarStyled />
            <MainPhoto />
            <WhiteBox />
            <BackBox>
                <AboutRigetaMain />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <ServicesMain />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <HomeAccordion />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <PartnersMain />
            </BackBox>
            <WhiteBox />
            <Footer />
        </>
    );

}

export default Home;
