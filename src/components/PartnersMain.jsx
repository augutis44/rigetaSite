import { Box, Grid, Typography } from "@mui/material";

const PartnersMain = () => {
    return (
        <Box>
            <Typography variant="h2" sx={{
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                MUMIS PASITIKI
            </Typography>
            <Typography variant="h5" sx={{
                textAlign: 'center'
            }}>
                15 metų patirtis buhalterinės apskaitos srityje, leido sukaupti didelį mumis pasitikinčių klientų ratą.
            </Typography>
            <Grid container spacing={3} sx={{
                display: 'flex',
                marginTop: '0.5rem',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Grid item>
                    <Box component="img" src='public\download.jpg' />
                </Grid>
                <Grid item>
                    <Box component="img" src='public\zaliaframes.png' />
                </Grid>
                <Grid item>
                    <Box component="img" src='public\Black & White Minimalist Business Logo.png' />
                </Grid>
                <Grid item>
                    <Box component="img" src='public\img.jpg' />
                </Grid>
            </Grid>
        </Box>
    );
}

export default PartnersMain;
