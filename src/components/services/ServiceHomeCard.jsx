import { Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { TfiArrowRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ServiceHomeCard = ({ title, children }) => {
    const theme = useTheme();
    const isDownLg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Card>
            <CardMedia
                component="img"
                maxheight="140"
                image="/flat-lay-payroll-concept-with-document.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant={isDownLg ? 'h4' : 'h3'}>
                    {title}
                </Typography>
                <Typography paragraph color="text.primary" variant={isDownLg ? 'body1' : 'h6'}>
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to='/services'>
                    <Button color="primary">
                        <TfiArrowRight style={{ marginRight: '0.5rem' }} />
                        Sužinoti daugiau
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

ServiceHomeCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default ServiceHomeCard;
