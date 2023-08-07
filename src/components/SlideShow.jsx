import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { SideBox } from "../helpers/StyledBox";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const reviews = [
    {
        companyIndex: '0',
        companyImage: 'public/zaliaframes.png',
        companyReview: 'Quisque nec dignissim orci, id mattis lectus. Nam efficitur vel purus sit amet porta. Pellentesque nec purus eros. Nam efficitur vel purus sit amet porta. Pellentesque nec purus eros.'
    },
    {
        companyIndex: '1',
        companyImage: 'public/Black & White Minimalist Business Logo2.png',
        companyReview: 'Aenean gravida posuere neque vitae aliquet. Integer venenatis fringilla elit, in fringilla libero iaculis varius. Integer in mi porttitor nisi vulputate ullamcorper.'
    },
    {
        companyIndex: '2',
        companyImage: 'public/img.jpg',
        companyReview: 'Vestibulum sollicitudin quis diam eu sollicitudin. Mauris at diam cursus felis aliquet aliquam.'
    }
];

const SlideShow = ({ interval }) => {
    const [index, setIndex] = useState(1);
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    const goToNextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }

    const goToPrevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    }

    useEffect(() => {
        const timer = setInterval(goToNextSlide, interval);

        return () => {
            clearInterval(timer);
        };
    }, [reviews, interval]);

    return (
        <SideBox>
            <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
                marginLeft: '1rem',
                marginBottom: '2rem',
                fontWeight: '400',
                textAlign: 'center'
            }}>
                Atsiliepimai
            </Typography>
            <Box sx={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                padding: '2rem 0rem',
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: '18rem',
                border: '1px solid gray',
                borderRadius: '1rem'

            }}>
                <Button onClick={goToNextSlide} style={{ backgroundColor: 'transparent' }}><SlArrowLeft /></Button>
                <Box>
                    <Box sx={{
                        margin: '0rem 0rem 2rem 0rem'
                    }}>
                        <Box component='img' src={reviews[index].companyImage}></Box>
                    </Box>
                    <Typography variant={isDownSm ? 'body1' : 'h6'}>{reviews[index].companyReview}</Typography>
                </Box>
                <Button onClick={goToPrevSlide} style={{ backgroundColor: 'transparent' }}><SlArrowRight /></Button>
            </Box>
        </SideBox>
    );

}

export default SlideShow;

