import MainPhoto from "../components/header/MainPhoto";
import Footer from "../components/footer/Footer";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import AboutRigetaMain from "../components/about/AboutRigetaMain";
import ServicesMain from "../components/services/ServicesMain";
import HomeAccordion from "../components/services/HomeAccordion";
import AppBarStyled from "../components/navigationBar/AppBarStyled";
import PartnersMain from "../components/partners/PartnersMain";
import { ScrollToTop } from "../components/shared/ScrollToTop";

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
