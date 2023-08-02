
import Footer from "../components/Footer";
import Survey from "../components/Survey";
import { Box } from "@mui/material";
import AppBarStyled from "../components/AppBarStyled";
import MainTitle from "../components/MainTitle";
import { BackBox, WhiteBox } from "../helpers/StyledBox";

const Contacts = () => {

    return (
        <>
            <AppBarStyled />
            <MainTitle>Susisiekite</MainTitle>
            <WhiteBox />
            <BackBox>
                <Survey />
            </BackBox>

            <Footer />
        </>
    );
}

export default Contacts;
