import { Box, Card, Typography } from '@mui/material';
import RegitaLogo from '../icons/RegitaLogo';

const MainPhoto = () => {

    return (
        <Card
            sx={{
                backgroundImage: "url('public/pexels-andrea-piacquadio-3770194.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    alignItems: 'center',
                    top: '20rem',
                    left: '30rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box>
                    <RegitaLogo variant='white' width="21rem" height="6.5rem" />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            color: 'white'
                        }}
                    >
                        Jūsų patikimas vadovas finansų pasaulyje
                    </Typography>
                </Box>
            </Box>

        </Card >
    );
}

export default MainPhoto;