import styled from '@emotion/styled';
import { Box } from '@mui/material';
import FooterText from './FooterText';
import { Container } from '../../helpers/StyledBox';


const StyledFooter = styled(Box)`
background-color: #274367;
color: white;
padding: 1.5rem 0rem;
`;

const Footer = () => {

    return (
        <StyledFooter>
            <Container>
                <Box sx={{
                    display: 'flex',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: { xs: 'center', md: 'space-between' },
                    flexDirection: { xs: 'column', md: 'row' },
                }}>
                    <FooterText name='REKVIZITAI'>
                        MB „Rigeta“ <br />
                        Įm. kodas: 304404274 <br />
                        Maironio g. 12-305, 28143 Utena <br />
                    </FooterText>
                    <FooterText name='KONTAKTAI'>
                        rigetamd@gmail.com <br />
                        +370 68685617 <br />
                    </FooterText>
                    <FooterText name='DARBO LAIKAS'>
                        I-V 9:00 - 18:00 <br />
                        Pietų pertrauka 12:00 - 13:00 <br />
                    </FooterText>
                </Box>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
