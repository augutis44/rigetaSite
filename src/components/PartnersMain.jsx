import { Box, Grid, Typography } from "@mui/material";
import { Container, TitleTypography } from "../helpers/StyledBox";


const PartnersMain = () => {

    return (
        <Container>
            <TitleTypography>
                Mumis pasitiki
            </TitleTypography>
            <Typography variant="h5" sx={{
                textAlign: 'center'
            }}>
                15 metų patirtis buhalterinės apskaitos srityje, leido sukaupti didelį mumis pasitikinčių klientų ratą.
            </Typography>
            <Grid container spacing={3} sx={{
                display: 'flex',
                marginTop: '0.5rem',
                flexDirection: { xs: 'columnW', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Grid item>
                    <Box component="img" src='/download.jpg' />
                </Grid>
                <Grid item>
                    <Box component="img" src='/zaliaframes.png' />
                </Grid>
                <Grid item>
                    <Box component="img" src='/Black & White Minimalist Business Logo.png' />
                </Grid>
                <Grid item>
                    <Box component="img" src='/img.jpg' />
                </Grid>
            </Grid>
        </Container>
    );
}

export default PartnersMain;
