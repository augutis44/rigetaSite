import styled from '@emotion/styled';
import { Box, Button } from "@mui/material"
import { GoArrowRight } from "react-icons/go";
import PropTypes from 'prop-types';

const RedButton = styled(Button)`
background-color: #E63946;
color: #FFFFFF
`;

const BlueButton = styled(Button)`
color: #1D3557
`;

const Buttons = ({ children, type }) => {
    if (type === 'red') {
        return (
            <RedButton sx={{
                padding: '0.2% 1%'
            }}>
                {children}
            </RedButton>
        )
    } else if (type === 'blue') {
        return (
            <BlueButton>
                {children}
                <Box sx={{
                    margin: '0.1rem 0rem 0rem 0.2rem',
                    color: '#1D3557'
                }}>
                    <GoArrowRight />
                </Box>
            </BlueButton>
        )
    }
}

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
}

export default Buttons;

