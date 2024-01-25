
import Footer from "../components/Footer";
import Survey from "../components/Survey";
import AppBarStyled from "../components/navigationBar/AppBarStyled";
import MainTitle from "../components/MainTitle";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import MapsAndAbout from "../components/MapsAndAbout";
import { ScrollToTop } from "../components/ScrollToTop";

const Contacts = () => {

    return (
        <>
            <ScrollToTop />
            <AppBarStyled />
            <MainTitle>Susisiekite</MainTitle>
            <WhiteBox />
            <BackBox>
                <Survey />
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

export default Contacts;
