import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { SideBox } from "../helpers/StyledBox";
import { TfiArrowRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const AboutRigetaMain = () => {
    const theme = useTheme();
    const isDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SideBox>
            <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
                marginLeft: '1rem',
                marginBottom: '2rem',
                fontWeight: '400',
                textAlign: 'center'
            }}>
                Apie „Rigeta“
            </Typography>
            <Card sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' }//nuo maziausio xs rezio iki md maziausio rezio
            }}>
                <CardMedia
                    component='img'
                    alt='two people sitting in the office'
                    image='public\two-business-partners-working-together-office.jpg' sx={{
                        maxHeight: '30rem',
                    }}
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <CardContent sx={{
                        minWidth: { xs: '100%', md: '50%' }
                    }}>
                        <Typography variant={isDownLg ? 'h4' : 'h3'}>
                            Rita Kraujalienė
                        </Typography>
                        <Typography gutterBottom variant={isDownLg ? 'h6' : 'h5'} color="text.primary">
                            UAB „Rigeta“ vadovė
                        </Typography>
                        <Typography paragraph variant={isDownLg ? 'body1' : 'h6'} color="text.primary" sx={{
                            marginRight: '3rem',
                        }}>
                            Curabitur et turpis vestibu. lum, ultricies urna vitae, lacinia est.
                            Maecenas acvelit metus. Urab itur et turpis. Curabitur et turpis vestibu.
                            lum, ultricies urna vitae, lacinia est.
                            Maecenas acvelit mXetus. Urab itur et turpis.
                            Curabitur et turpis vestibu. lum, ultricies urna vitae, lacinia est.
                            Maecenas acvelit metus. Urab itur et turpis.
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
        </SideBox >
    );
}

export default AboutRigetaMain;
