import { Box, Typography } from "@mui/material";

const FooterText = ({ name, children }) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography sx={{
                fontWeight: 'bold',
                textAlign: {xs: 'center', md: 'left'},
                letterSpacing: '1px'
            }}>
                {name}
            </Typography>
            <Typography gutterBottom sx={{
                marginBottom: {xs: '1rem', md: '0'},
                textAlign: {xs: 'center', md: 'left'}
            }}>
                {children}
            </Typography>
        </Box>
    );
}

export default FooterText;
