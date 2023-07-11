import styled from '@emotion/styled';
import { Box } from '@mui/material';
import FooterText from './FooterText';

const StyledFooter = styled(Box)`
background-color: #274367;
display: flex;
justify-content: space-around;
align-items: flex-start;
color: white;
padding: 1rem;

`;

const Footer = () => {

    return (
            <StyledFooter>
                <FooterText name='REKVIZITAI'>
                    MB Rigeta <br />
                    Įm. kodas: 304404274 <br />
                    Maironio g. 12, 28143 Utena <br />
                </FooterText>
                <FooterText name='KONTAKTAI'>
                    rita_kraujaliene@yahoo.com <br />
                    +37068685617 <br />
                </FooterText>
                <FooterText name='DARBO LAIKAS'>
                    I-IV 8:00 - 17:00 <br />
                    V 8:00 - 16:00 <br />
                    Pietų pertrauka 12:00 - 13:00 <br />
                </FooterText>
            </StyledFooter>
    )
}

export default Footer;
