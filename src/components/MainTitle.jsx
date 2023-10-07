import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const MainTitle = ({ children }) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{
            backgroundImage: "url('/static/low-angle-shot-modern-business-building-touching-clear-sky.jpg')",
            height: '15rem',
            backgroundRepeat: 'round',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Box sx={{
                marginLeft: { sm: '2rem', md: '5rem', lg: '10rem' }
            }}>
                <Typography variant={isDownSm ? 'h2' : 'h1'} sx={{
                    color: '#ffffff',
                    marginTop: '5rem',
                    marginLeft: '1rem'
                }}>
                    {children}
                </Typography>
            </Box>
        </Card>
    )
}

export default MainTitle;
