import MainPhoto from "../components/MainPhoto";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import AboutRigetaMain from "../components/AboutRigetaMain";
import ServicesMain from "../components/ServicesMain";
import HomeAccordion from "../components/HomeAccordion";
import AppBarStyled from "../components/AppBarStyled";

const Home = () => {

    return (
        <>
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
                <MainBody />
            </BackBox>
            <WhiteBox />
            <Footer />
        </>
    );

}

export default Home;

