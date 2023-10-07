import { Box, Grid, Typography } from "@mui/material";
import { SideBox, TitleTypography } from "../helpers/StyledBox";


const PartnersMain = () => {

    return (
        <SideBox>
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
                    <Box component="img" src='/static/download.jpg' />
                </Grid>
                <Grid item>
                    <Box component="img" src='/static/zaliaframes.png' />
                </Grid>
                <Grid item>
                    <Box component="img" src='/static/Black & White Minimalist Business Logo.png' />
                </Grid>
                <Grid item>
                    <Box component="img" src='/static/img.jpg' />
                </Grid>
            </Grid>
        </SideBox>
    );
}

export default PartnersMain;
