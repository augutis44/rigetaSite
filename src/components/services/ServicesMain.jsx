import { Box, Button, Grid } from "@mui/material";
import { Container, TitleTypography } from "../../helpers/StyledBox";
import ServiceHomeCard from "./ServiceHomeCard";
import { Link } from "react-router-dom";

const ServicesMain = () => {

    return (
        <Container>
            <TitleTypography>
                Paslaugos
            </TitleTypography>
            <Grid container spacing={2} sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: { xs: 'column', md: 'row' },
            }}>
                <Grid item sx={{
                    display: 'flex'
                }}>
                    <ServiceHomeCard
                        title={'Buhalterinės paslaugos'}>
                        Curabitur et turpis vestibulum, ultricies urna vitae, lacinia est.
                        Maecenas ac velit metus. Nunc tincidunt, libero at tincidunt  turpis.
                    </ServiceHomeCard>
                </Grid>
                <Grid item sx={{
                    display: 'flex'
                }}>
                    <ServiceHomeCard title={'Projektų paraiškų pildymas'}>
                        Curabitur et turpis vestibulum, ultricies urna
                        vitae, lacinia est. Maecenas ac velit metus.
                        Nunc tincidunt, libero at tincidunt  turpis
                        vestibulum, ultricies urna.
                    </ServiceHomeCard>
                </Grid>
            </Grid>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
            }}>
                <Link to='/services'>
                    <Button sx={{
                        backgroundColor: '#E63946',
                        color: '#FFFFFF',
                        padding: '0rem 2rem',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        textTransform: 'capitalize',
                        boxShadow: '3',
                        fontWeight: '400',
                        '&:hover': {
                            backgroundColor: '#f8847f',
                            color: '#FFFFFF',
                        }
                    }}>
                        Visos paslaugos
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default ServicesMain;
