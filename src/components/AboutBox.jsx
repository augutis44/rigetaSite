import { Box, Typography } from "@mui/material";

const AboutBox = () => {
    return (
        <Box sx={{
            position: 'relative'
        }}>
            <Box sx={{
                padding: '2rem',
                maxWidth: '62rem',
                margin: 'auto',
                display: 'flex',
                zIndex: '0',
                position: 'relative'
            }}
            >
                <Box>
                    <Typography variant='h3' sx={{
                        margin: '0rem 0rem 2rem 1rem'
                    }}>
                        Apie "Rigeta"
                    </Typography>
                    <Typography variant='h5'>
                        <b>Mūsų misija</b> - Nulla facilisi. Nam scelerisque blandit faucibus. Ut lobortis sollicitudin imperdiet Vivamus luctus fringilla sodales.
                    </Typography>
                    <br />
                    <Typography>
                        In quis felis nisi. Quisque vestibulum auctor egestas. Pellentesque commodo massa nec urna volutpat, ac commodo ipsum pellentesque. Nulla tempor volutpat dui ut faucibus. Cras malesuada sem eget est gravida bibendum. Nam egestas orci in arcu blandit, id cursus dolor condimentum. Nam elementum aliquam pretium. Nunc porta mi lorem, a congue mauris sollicitudin ac.
                    </Typography>
                    <br />
                    <Typography>
                        Cras malesuada sem eget est gravida bibendum. Nam egestas orci in arcu blandit, id cursus dolor condimentum. Nam elementum aliquam pretium. Nunc porta mi lorem, a congue mauris sollicitudin.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutBox;
