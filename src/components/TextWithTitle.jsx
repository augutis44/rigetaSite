import { Box, Typography } from "@mui/material";

const TextWithTitle = ({ title, children, textColor }) => {

    return (
        <Box sx={{
            color: textColor
        }}>
            <Typography variant="h4">
                {title}
            </Typography>
            <Typography variant="h6">
                {children}
            </Typography>
        </Box>
    );

}

export default TextWithTitle;