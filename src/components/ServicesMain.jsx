import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { SideBox } from "../helpers/StyledBox";
import Buttons from "./Buttons";

const ServicesMain = () => {
    return (
        <SideBox>
            <Box sx={{
                align: 'center',
                margin: 'auto',
            }}>
                <Typography variant='h3' sx={{
                    margin: '0rem 0rem 2rem 1rem'
                }}>
                    Paslaugos
                </Typography>
                <Grid container spacing={2} sx={{
                    display: 'flex',
                    flexWrap: 'nowrap'
                }}>
                    <Grid item>
                        <Card>
                            <CardMedia
                                component="img"
                                maxHeight="140"
                                image="public\flat-lay-payroll-concept-with-document.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Buhalterinės paslaugos
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Curabitur et turpis vestibulum, ultricies urna vitae, lacinia est.
                                    Maecenas ac velit metus. Nunc tincidunt, libero at tincidunt  turpis.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Buttons type="red">Sužinoti daugiau</Buttons>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card >
                            <CardMedia
                                component="img"
                                maxHeight="140"
                                image="public\flat-lay-payroll-concept-with-document.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Projektų paraiškų pildymas
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Curabitur et turpis vestibulum, ultricies urna
                                    vitae, lacinia est. Maecenas ac velit metus.
                                    Nunc tincidunt, libero at tincidunt  turpis
                                    vestibulum, ultricies urna.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Buttons type="red">Sužinoti daugiau</Buttons>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </SideBox>
    )
}

export default ServicesMain;


