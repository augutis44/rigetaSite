import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { SideBox } from "../helpers/StyledBox";


const AboutBox = () => {
    const theme = useTheme();
    const isDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SideBox>
            <Typography variant={isDownSm ? 'h3' : 'h2'} sx={{
                marginLeft: '1rem',
                marginBottom: '2rem',
                fontWeight: '400',
                textAlign: 'center'
            }}>
                Apie "Rigeta"
            </Typography>
            <Typography gutterBottom variant={isDownLg ? 'h6' : 'h5'} sx={{
                textAlign: 'justify'
            }}>
                <b>Mūsų misija</b> - Nulla facilisi. Nam scelerisque blandit faucibus.
                Ut lobortis sollicitudin imperdiet Vivamus luctus fringilla sodales.
            </Typography>
            <Typography paragraph variant={isDownLg ? 'body1' : 'h6'} sx={{
                textAlign: 'justify'
            }}>
                In quis felis nisi. Quisque vestibulum auctor egestas. Pellentesque
                commodo massa nec urna volutpat, ac commodo ipsum pellentesque. Nulla
                tempor volutpat dui ut faucibus. Cras malesuada sem eget est gravida
                bibendum. Nam egestas orci in arcu blandit, id cursus dolor condimentum.
                Nam elementum aliquam pretium. Nunc porta mi lorem, a congue mauris
                sollicitudin ac.
            </Typography>
            <Typography paragraph variant={isDownLg ? 'body1' : 'h6'} sx={{
                textAlign: 'justify'
            }}>
                Cras malesuada sem eget est gravida bibendum. Nam egestas orci in arcu
                blandit, id cursus dolor condimentum. Nam elementum aliquam pretium. Nunc
                porta mi lorem, a congue mauris sollicitudin.
            </Typography>
        </SideBox>
    )
}

export default AboutBox;
