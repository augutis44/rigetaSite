import Footer from "../components/Footer";
import AboutBox from "../components/AboutBox";
import SlideShow from "../components/SlideShow";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import AppBarStyled from "../components/AppBarStyled";
import MainTitle from "../components/MainTitle";
import MapsAndAbout from "../components/MapsAndAbout";

const About = () => {

    return (
        <>
            <AppBarStyled />
            <MainTitle>Apie</MainTitle>
            <WhiteBox />
            <BackBox>
                <AboutBox />
            </BackBox>
            <WhiteBox />
            <BackBox>
                <SlideShow interval={5000} />
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
