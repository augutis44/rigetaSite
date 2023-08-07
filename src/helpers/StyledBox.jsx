import styled from '@emotion/styled';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export const FlexBox = styled(Box)`
display: flex;
`;

export const ColumnFlexBox = styled(FlexBox)`
flex-direction: column;
`;

export const WhiteBox = styled(Box)`
background-Color: #ffffff;
height: 4rem
`;

export const SideBox = ({ children }) => {
    return (
        <Box sx={{
            padding: { sm: '0rem 2rem', md: '0rem 5rem', lg: '0rem 10rem' }
        }}>
            {children}
        </Box>
    )
}

export const BackBox = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: '#F9F9F9',
            zIndex: '-1',
            padding: '2rem'
        }}>
            {children}
        </Box>
    )
}

export const TitleTypography = ({ children }) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
            marginBottom: '2rem',
            fontWeight: '500',
            textAlign: 'center'
        }}>
            {children}
        </Typography>
    )
}
