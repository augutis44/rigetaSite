import { Box } from "@mui/material";
import InformationRigeta from "./InformacionRigeta";
import { TitleTypography } from "../helpers/StyledBox";

const MapsAndAbout = () => {

    return (
        <>
            <TitleTypography>
                Kontaktai
            </TitleTypography>
            <Box sx={{
                display: 'flex',
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '100%' },
                    height: '100%',
                    paddingX: { xs: "1rem", sm: "2rem", md: '2rem' },
                    position: { xs: 'static', md: 'relative' },
                }}>

                    <Box sx={{
                        height: { xs: '200px', md: '500px' },
                    }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1129.9193147139317!2d25.5998523!3d55.5003372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd57e11ff14ee9%3A0x1c128c43e282d81a!2sMaironio%20g.%2012%2C%2028143%20Utena!5e0!3m2!1slt!2slt!4v1706276266351!5m2!1slt!2slt"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"

                        >
                        </iframe>
                    </Box>

                    <Box sx={{
                        position: { xs: 'static', md: 'absolute' },
                        top: { xs: 'none', md: '40px' },
                        left: { md: "4rem", lg: "8rem", xl: "12rem" },
                        backgroundColor: '#274367',
                        color: 'white',
                        padding: '2rem 3rem',
                        margin: { xs: '1.5rem 0rem', md: '0' },
                        borderRadius: '5px',
                        boxShadow: { xs: 'none', md: '0 2px 5px 0 #a9a4a4' },
                    }}>
                        <InformationRigeta />
                    </Box>

                </Box>
            </Box >
        </>
    )
}

export default MapsAndAbout;
