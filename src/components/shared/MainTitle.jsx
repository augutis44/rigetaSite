import { Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Container } from "../../helpers/StyledBox";
import PropTypes from 'prop-types';

const MainTitle = ({ children }) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{
            backgroundImage: "url('/low-angle-shot-modern-business-building-touching-clear-sky.jpg')",
            height: '14rem',
            backgroundRepeat: 'round',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Container>
                <Typography variant={isDownSm ? 'h2' : 'h1'} sx={{
                    color: '#ffffff',
                    marginTop: '4rem',
                    marginLeft: '1rem'
                }}>
                    {children}
                </Typography>
            </Container>

        </Card>
    )
}

MainTitle.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainTitle;
