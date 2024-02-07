import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { Container, TitleTypography } from "../../helpers/StyledBox";
import { TfiArrowRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const AboutRigetaMain = () => {
    const theme = useTheme();
    const isDownLg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Container>
            <TitleTypography>
                Apie MB „Rigeta“
            </TitleTypography>
            <Card sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' }
            }}>
                <Box sx={{
                    maxheight: { xs: '15rem', md: '22rem' },
                }}>
                    <CardMedia
                        component='img'
                        alt='two people sitting in the office'
                        image='/two-business-partners-working-together-office.jpg'
                        sx={{
                            height: { xs: '15rem', md: '100%' },
                            
                        }}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <CardContent sx={{
                        minWidth: { xs: '100%', md: '50%' }
                    }}>

                        <Typography paragraph variant={isDownLg ? 'body1' : 'h6'} color="text.primary" sx={{
                            marginRight: '3rem',
                        }}>
                            Įmonė veikia nuo 2016 metų. Mūsų paslaugas perka 35 įmonės , kurios yra iš įvairių
                            pramonės šakų ir dydžių. Mes nerenkame savo klientų pagal teritorinius apribojimus,
                            jų veikla apima visą Lietuvos teritoriją.
                            <br />
                            <br />
                            Esame patyrusių, kvalifikuotų, atsakingų
                            specialistų komanda, kuri įsipareigoja teikti aukšto lygio paslaugas savo klientams.
                            Komandos darbuotojų patirtis apskaitos srityje nuo 1992 m. Mūsų ilgametė patirtis
                            apskaitos srityje leidžia mums pasiūlyti individualizuotus sprendimus, pritaikytus
                            kiekvienos įmonės poreikiams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/about'>
                            <Button color="primary">
                                <TfiArrowRight style={{ marginRight: '0.5rem' }} />
                                Sužinoti daugiau
                            </Button>
                        </Link>
                    </CardActions>
                </Box>
            </Card>
        </Container >
    );
}

export default AboutRigetaMain;
