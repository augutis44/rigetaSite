import { Box } from "@mui/material";
import MainBar from "../components/mainBar";
import MainPhoto from "../components/MainPhoto";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <>
            <MainBar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                <MainPhoto />
                <MainBody />
            </Box>
            <Footer />
        </>
    );

}

export default Home;

