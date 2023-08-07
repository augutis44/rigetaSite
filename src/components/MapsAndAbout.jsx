import { Box, Typography, useMediaQuery } from "@mui/material";
import InformationRigeta from "./InformacionRigeta";
import { SideBox } from "../helpers/StyledBox";
import { useTheme } from '@mui/material/styles';


const MapsAndAbout = () => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <SideBox>
            <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
                marginLeft: '1rem',
                marginBottom: '2rem',
                fontWeight: '400',
                textAlign: 'center'
            }}>
                Mus rasite
            </Typography>
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
