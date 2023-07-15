
import MainBar from "../components/mainBar";
import Footer from "../components/Footer";
import Survey from "../components/Survey";
import PhotoCard from "../components/PhotoCard";
import TextWithTitle from "../components/TextWithTitle";
import { Box } from "@mui/material";

const Contacts = () => {

    return (
        <>
            <MainBar />
            <Box sx={{
                zIndex: -1,
                top: 0,
                left: 0,
                height: '30rem',
                backgroundColor: '#274367',
                margin: '7rem 0rem 0rem 0rem',
                width: '100%',
                position: 'absolute',
            }} />
            <PhotoCard src='public\Capture.JPG'>
                <TextWithTitle
                    title='MUS RASITE'
                    textColor='#ffffff'>
                    MB Rigeta <br />
                    Įm. kodas: 304404274 <br />
                    Maironio g. 12, 28143 Utena <br />
                    <br />
                    rita_kraujaliene@yahoo.com <br />
                    +37068685617 <br />
                    <br />
                    I-IV 8:00 - 17:00 <br />
                    V 8:00 - 16:00 <br />
                    Pietų pertrauka 12:00 - 13:00
                </TextWithTitle>
            </PhotoCard>
            <Survey />
            <Footer />
        </>
    );

}

export default Contacts;



