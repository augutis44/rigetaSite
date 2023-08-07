
import Footer from "../components/Footer";
import Survey from "../components/Survey";
import AppBarStyled from "../components/AppBarStyled";
import MainTitle from "../components/MainTitle";
import { BackBox, WhiteBox } from "../helpers/StyledBox";
import MapsAndAbout from "../components/MapsAndAbout";

const Contacts = () => {

    return (
        <>
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
