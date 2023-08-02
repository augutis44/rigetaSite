import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { SideBox } from "../helpers/StyledBox";
import Buttons from "./Buttons";

const AboutRigetaMain = () => {
    return (
        <SideBox>
            <Box
                sx={{
                    align: 'center',
                    margin: 'auto',
                }}>

                <Typography variant='h3' sx={{
                    margin: '0rem 0rem 2rem 1rem'
                }}>
                    Apie "Rigeta"
                </Typography>
                <Card sx={{
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="public\two-business-partners-working-together-office.jpg" sx={{
                            maxHeight: '30rem',
                            height: 'auto'
                        }}
                    />
                    <Box >
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography gutterBottom variant="h4" component="div">
                                Rita Kraujalienė
                            </Typography>
                            <Typography variant="h6">
                                UAB “Rigeta” vadovė
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Curabitur et turpis vestibu. lum, ultricies urna vitae, lacinia est.
                                Maecenas acvelit metus. Urab itur et turpis. Curabitur et turpis vestibu.
                                lum, ultricies urna vitae, lacinia est.
                                Maecenas acvelit metus. Urab itur et turpis.
                                Curabitur et turpis vestibu. lum, ultricies urna vitae, lacinia est.
                                Maecenas acvelit metus. Urab itur et turpis.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Buttons type="red">Sužinoti daugiau</Buttons>
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </SideBox >
    );
}

export default AboutRigetaMain;


