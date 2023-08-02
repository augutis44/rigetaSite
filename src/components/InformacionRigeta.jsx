import { Box, Typography } from "@mui/material";

const InformationRigeta = () => {

    return (<Box>
        <Typography variant='h6'>
            REKVIZITAI
        </Typography>
        <Typography>
            MB Rigeta <br />
            Įm. kodas: 304404274 <br />
        </Typography>
        <Typography variant='h6'>
            MŪSŲ ADRESAS
        </Typography>
        <Typography>
            Maironio g. 12, 28143 Utena <br />
        </Typography>
        <Typography variant='h6'>
            KONTAKTAI
        </Typography>
        <Typography>
            rigetamb@gmail.com <br />
            +37068685617 <br />
        </Typography>
        <Typography variant='h6'>
            DARBO LAIKAS
        </Typography>
        <Typography>
            I-IV 8:00 - 17:00 <br />
            V 8:00 - 16:00 <br />
            Pietų pertrauka 12:00 - 13:00
        </Typography>
    </Box>
    );
}

export default InformationRigeta;

