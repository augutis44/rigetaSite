import { Card, Typography, useMediaQuery } from '@mui/material';
import RegitaLogo from '../icons/RegitaLogo';
import { useTheme } from '@mui/material/styles';

const MainPhoto = () => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Card
            sx={{
                backgroundImage: isDownSm ? "url('public/pexels-andrea-piacquadio-3770194 - Copy.jpg')" : "url('public/pexels-andrea-piacquadio-3770194.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <RegitaLogo variant='white' width="21rem" height="6.5rem" />
            <Typography
                sx={{
                    fontSize: '30px',
                    color: 'white',
                    margin: '1rem',
                    textAlign: 'center'
                }}
            >
                Jūsų patikimas vadovas finansų pasaulyje
            </Typography>
        </Card >
    );
}

export default MainPhoto;