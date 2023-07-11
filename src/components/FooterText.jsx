import { Box, Typography } from "@mui/material";

const FooterText = ({ name, children }) => {
    return (
        <Box>
            <Typography sx={{
                margin: '1rem 0rem',
                fontWeight: 'bold'
            }}
            >
                {name}
            </Typography>
            <Typography sx={{
                margin: '1rem 0rem'
            }}>
                {children}
            </Typography>
        </Box>
    )
}

export default FooterText;
