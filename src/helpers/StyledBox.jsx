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
            padding: { sm: '0rem 2rem', md: '0rem 5rem', lg: '0rem 10rem' },
            maxWidth: '92rem',
            align: 'center',
            margin: 'auto'
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
            paddingY: '2rem'
        }}>
            {children}
        </Box>
    )
}

export const TitleTypography = ({ children }) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Typography variant={'h3'} sx={{
            marginBottom: '2rem',
            fontWeight: '500',
            textAlign: 'center'
        }}>
            {children}
        </Typography>
    )
}

export const Container = ({ children }) => {
    return (
        <Box sx={{
            paddingX: { xs: "1rem", sm: "2rem", md: "4rem", lg: "8rem", xl: "12rem", xxl: "22rem" }
        }}>
            {children}
        </Box>
    )
}
