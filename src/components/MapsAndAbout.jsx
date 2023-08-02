import { Box } from "@mui/material"
import InformationRigeta from "./InformacionRigeta"

const MapsAndAbout = () => {

    return (
        <Box sx={{
            padding: '2rem',
            maxWidth: '62rem',
            margin: 'auto',
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box component='img' src='public\Capture.JPG'></Box>
            <Box sx={{
                margin: '2rem'
            }}>
                <InformationRigeta />
            </Box>

        </Box>
    )
}

export default MapsAndAbout;
