import { Box, Button, Typography } from "@mui/material";
import PhotoCard from "./PhotoCard";
import TextWithTitle from "./TextWithTitle";

const MainBody = () => {
    return (
        <Box>
            <Box sx={{
                zIndex: -1,
                top: 0,
                left: 0,
                height: '32rem',
                backgroundColor: '#274367',
                margin: '60rem 0rem 0rem 0rem',
                width: '100%',
                position: 'absolute'
            }} />

            <PhotoCard src='public\austin-distel-jpHw8ndwJ_Q-unsplash1.jpg'>
                <Box sx={{
                    margin: '0rem 0rem 4rem 0rem',
                }}>
                    <TextWithTitle
                        title='DARBUOTOJAI TURINTYS DIDELĘ PATIRTĮ'
                    >Curabitur et turpis vestibulum, ultricies urna vitae, lacinia est. Maecenas ac velit metus. Nunc tincidunt, libero at tincidunt sodales, diam ex sodales ipsum.
                    </TextWithTitle>
                </Box>
                <TextWithTitle
                    textColor='white'
                    title='AUKŠČIAUSIOS KOKYBĖS PASLAUGOS'
                >Curabitur et turpis vestibulum, ultricies urna vitae, lacinia est. Maecenas ac velit metus. Nunc tincidunt, libero at tincidunt sodales, diam ex sodales ipsum, sit amet varius massa elit nec ligula. Morbi eu ornare diam, a commodo lectus.
                </TextWithTitle>
            </PhotoCard>

            <PhotoCard src='public\wance-paleri-NnRIrQ1USyw-unsplash.jpg' pictureVariant='right'>
                <Box sx={{
                    margin: '0rem 4rem 0rem 0rem',
                }}>
                    <Typography
                        variant="h2"
                        color='white'>
                        SUSISIEK SU MUMIS
                    </Typography>
                    <Button sx={{
                        color: 'white',
                        backgroundColor: 'red',

                    }}>
                        Kontaktai
                    </Button>
                </Box>
            </PhotoCard >

            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                margin: '5rem 7.5rem',

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
                    margin: '2rem 0rem 5rem 0rem' 
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

export default MainBody;