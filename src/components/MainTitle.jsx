import { Box, Typography } from "@mui/material";
import { SideBox } from "../helpers/StyledBox";

const MainTitle = ({ children }) => {
    return (
        <Box>
            <SideBox>
                <Typography variant="h1" sx={{
                    color: '#ffffff',
                    position: 'absolute',
                    margin: '5rem 0rem 0rem 0rem'
                }}>
                    {children}
                </Typography>
            </SideBox>
            <Box component='img' src='public\low-angle-shot-modern-business-building-touching-clear-sky.jpg'
                sx={{
                    width: '100%'
                }}>
            </Box>
        </Box>
    );
}

export default MainTitle;
