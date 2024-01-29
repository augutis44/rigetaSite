import Footer from "../components/footer/Footer";
import AboutBox from "../components/AboutBox";
import SlideShow from "../components/SlideShow";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import AppBarStyled from "../components/navigationBar/AppBarStyled";
import MainTitle from "../components/MainTitle";
import MapsAndAbout from "../components/MapsAndAbout";
import { ScrollToTop } from "../components/ScrollToTop";

const About = () => {

    return (
        <>
            <ScrollToTop />
            <AppBarStyled />
            <MainTitle>Apie</MainTitle>
            <WhiteBox />
            <BackBox>
                <AboutBox />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <SlideShow />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <MapsAndAbout />
            </BackBox>
            <WhiteBox />
            <Footer />
        </>
    );

}

export default About;
