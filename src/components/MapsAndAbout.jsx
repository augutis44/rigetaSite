import { Box } from "@mui/material";
import InformationRigeta from "./InformacionRigeta";
import { Container, SideBox, TitleTypography } from "../helpers/StyledBox";

const MapsAndAbout = () => {

    return (
        <Container>
            <TitleTypography>
                Kontaktai
            </TitleTypography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: { xs: '100px', md: '600px' },
                    border: '1px solid black',
                    borderRadius: '5px',
                    overflow: 'hidden'
                }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1129.9193147139317!2d25.5998523!3d55.5003372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd57e11ff14ee9%3A0x1c128c43e282d81a!2sMaironio%20g.%2012%2C%2028143%20Utena!5e0!3m2!1slt!2slt!4v1706276266351!5m2!1slt!2slt"
                        height="450"
                        width="600"
                        style={{
                            border: 0
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </Box>
                <Box sx={{
                    marginLeft: '8rem',
                    // backgroundColor: '#ffffff',
                    // padding: '2rem 3rem',
                    // border: '3px solid gray',
                    // borderRadius: '1rem'
                }}>
                    <InformationRigeta />
                </Box>
            </Box>
        </Container>
    )
}

export default MapsAndAbout;
