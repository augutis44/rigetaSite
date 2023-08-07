import { Box, Typography } from "@mui/material";

const AlignedText = ({ children, type }) => {
    if (type === 'title') {
        return (
            <Typography variant='h6' sx={{
                textAlign: { xs: 'center', md: 'left' }
            }}>
                {children}
            </Typography>
        )
    } else {
        return (
            <Typography sx={{
                textAlign: { xs: 'center', md: 'left' }
            }}>
                {children}
            </Typography>)
    }
}

const InformationRigeta = () => {

    return (
        <>
            <AlignedText type='title'>
                REKVIZITAI
            </AlignedText>
            <AlignedText>
                MB Rigeta <br />
                Įm. kodas: 304404274 <br />
            </AlignedText>
            <AlignedText type='title'>
                MŪSŲ ADRESAS
            </AlignedText>
            <AlignedText>
                Maironio g. 12, 28143 Utena <br />
            </AlignedText>
            <AlignedText type='title'>
                KONTAKTAI
            </AlignedText>
            <AlignedText>
                rigetamb@gmail.com <br />
                +37068685617 <br />
            </AlignedText>
            <AlignedText type='title'>
                DARBO LAIKAS
            </AlignedText>
            <AlignedText>
                I-IV 8:00 - 17:00 <br />
                V 8:00 - 16:00 <br />
                Pietų pertrauka 12:00 - 13:00
            </AlignedText>
        </>
    );
}

export default InformationRigeta;
