import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { SideBox } from "../helpers/StyledBox";
import { useTheme } from '@mui/material/styles';
import ServiceHomeCard from "./ServiceHomeCard";
import { Link } from "react-router-dom";


const ServicesMain = () => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SideBox>
            <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
                marginLeft: '1rem',
                marginBottom: '2rem',
                fontWeight: '400'
            }}>
                Paslaugos
            </Typography>
            <Grid container spacing={2} sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <Grid item>
                    <ServiceHomeCard title={'Buhalterinės paslaugos'}>
                        Curabitur et turpis vestibulum, ultricies urna vitae, lacinia est.
                        Maecenas ac velit metus. Nunc tincidunt, libero at tincidunt  turpis.
                    </ServiceHomeCard>
                </Grid>
                <Grid item>
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
                        fontSize: '2rem',
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
        </SideBox>
    );
}

export default ServicesMain;
