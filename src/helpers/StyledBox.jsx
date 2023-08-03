import styled from '@emotion/styled';
import { Box } from '@mui/material';

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
            padding: { xs: '0rem 1rem', sm: '0rem 2rem', md: '0rem 5rem', lg: '0rem 10rem' }
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
