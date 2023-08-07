import { Box } from "@mui/material";
import InformationRigeta from "./InformacionRigeta";
import { SideBox, TitleTypography } from "../helpers/StyledBox";

const MapsAndAbout = () => {

    return (
        <SideBox>
            <TitleTypography>
                Mus rasite
            </TitleTypography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component='img' src='public\Capture.JPG' sx={{
                    maxWidth: { xs: '20rem', md: '25rem' },
                }}></Box>
                <Box sx={{
                    margin: '2rem'
                }}>
                    <InformationRigeta />
                </Box>
            </Box>
        </SideBox>
    )
}

export default MapsAndAbout;
