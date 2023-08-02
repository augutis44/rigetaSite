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
            margin: { xs: '0rem 2rem', sm: '0rem 4rem', md: '0rem 8rem' }
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
