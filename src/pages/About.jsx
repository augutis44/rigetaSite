import Footer from "../components/footer/Footer";
import AboutBox from "../components/about/AboutBox";
import SlideShow from "../components/partners/SlideShow";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import AppBarStyled from "../components/navigationBar/AppBarStyled";
import MainTitle from "../components/shared/MainTitle";
import MapsAndAbout from "../components/about/MapsAndAbout";
import { ScrollToTop } from "../components/shared/ScrollToTop";

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
