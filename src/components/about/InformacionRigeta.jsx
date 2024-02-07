import { Typography } from "@mui/material";

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
                MB „Rigeta“ <br />
                Įm. kodas: 304404274 <br />
            </AlignedText>
            <br />

            <AlignedText type='title'>
                MŪSŲ ADRESAS
            </AlignedText>
            <AlignedText>
                Maironio g. 12-305, 28143 Utena <br />
            </AlignedText>
            <br />

            <AlignedText type='title'>
                KONTAKTAI
            </AlignedText>
            <AlignedText>
                rigetamb@gmail.com <br />
                Tel.: +370 68685617 <br />
            </AlignedText>
            <br />

            <AlignedText type='title'>
                DARBO LAIKAS
            </AlignedText>
            <AlignedText>
                I-V 9:00-18.00 <br />
                Pietų pertrauka 12:00 - 13:00
            </AlignedText>
        </>
    );
}

export default InformationRigeta;
