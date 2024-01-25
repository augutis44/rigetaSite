import { Card, Typography, useMediaQuery } from '@mui/material';
import RegitaLogo from '../icons/RegitaLogo';
import { useTheme } from '@mui/material/styles';

const MainPhoto = () => {
    const theme = useTheme();
    const isDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const logoHeight = isDownMd ? '16rem' : "21rem"

    return (
        <Card
            sx={{
                background: isDownMd ?
                    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/pexels-andrea-piacquadio-3770194 - Copy.jpg")'
                    : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("pexels-andrea-piacquadio-3770194.jpg")'
                ,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <RegitaLogo variant='white' width={logoHeight} height="6.5rem" />
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
