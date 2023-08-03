import { Box, Typography } from "@mui/material";

const PartnersMain = () => {
    return (
        <Box>
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                margin: '1rem'
            }}>

                <Typography variant="h2" sx={{
                    fontWeight: 'bold'
                }}
                >MUMIS PASITIKI
                </Typography>
                <Typography variant="h5">15 metų patirtis buhalterinės apskaitos srityje, leido sukaupti didelį mumis pasitikinčių klientų ratą.</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '80rem',
                    margin: '2rem 0rem 0rem 0rem' 
                }}>
                    <Box component="img" src='public\download.jpg' />
                    <Box component="img" src='public\zaliaframes.png' />
                    <Box component="img" src='public\Black & White Minimalist Business Logo.png' />
                    <Box component="img" src='public\img.jpg' />
                </Box>
            </Box>
        </Box>
    )

}

export default PartnersMain;
