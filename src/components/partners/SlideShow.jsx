import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, TitleTypography } from "../../helpers/StyledBox";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const reviews = [
    {
        companyIndex: '0',
        companyImage: '/zaliaframes.png',
        companyReview: 'Quisque nec dignissim orci, id mattis lectus. Nam efficitur vel purus sit amet porta. Pellentesque nec purus eros. Nam efficitur vel purus sit amet porta. Pellentesque nec purus eros.'
    },
    {
        companyIndex: '1',
        companyImage: '/Black & White Minimalist Business Logo2.png',
        companyReview: 'Aenean gravida posuere neque vitae aliquet. Integer venenatis fringilla elit, in fringilla libero iaculis varius. Integer in mi porttitor nisi vulputate ullamcorper.'
    },
    {
        companyIndex: '2',
        companyImage: '/img.jpg',
        companyReview: 'Vestibulum sollicitudin quis diam eu sollicitudin. Mauris at diam cursus felis aliquet aliquam.'
    }
];

const SlideShow = () => {
    const [index, setIndex] = useState(1);
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    const interval = 5000;

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
    }, [interval]);

    return (
        <Container>

            <TitleTypography>
                Atsiliepimai
            </TitleTypography>

            <Box sx={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                padding: '2rem 0rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '16rem',
                border: '3px solid gray',
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

        </Container>
    );

}

export default SlideShow;
