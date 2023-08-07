import { Box, Typography } from "@mui/material";

const FooterText = ({ name, children }) => {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center', 
            flexDirection: 'column'
        }}>
            <Typography sx={{
                fontWeight: 'bold'
            }}>
                {name}
            </Typography>
            <Typography gutterBottom sx={{
                textAlign: 'center',
                marginBottom: '1rem'
            }}>
                {children}
            </Typography>
        </Box>
    );
}

export default FooterText;
