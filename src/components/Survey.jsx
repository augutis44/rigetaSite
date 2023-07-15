import { Box, Button, TextField, Typography } from "@mui/material";

const Survey = () => {

    return (
        <>
            <Typography variant="h2" sx={{
                textAlign: 'center'
            }}>
                SUSISIEKITE
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { margin: '0.5rem 0rem', width: '100%' },
                    marginBottom: '3rem',
                }}
                noValidate
                autoComplete="off"
            >
                <Box sx={{
                    padding: '0rem 15rem'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}>
                        <TextField
                            required
                            label="Privalomas"
                            defaultValue="Vardas"
                        />
                        <TextField
                            defaultValue="Pavardė"
                        />
                        <TextField
                            required
                            label="Privalomas"
                            defaultValue="El.paštas"
                        />
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Privalomas"
                            multiline
                            rows={4}
                            defaultValue="Klausimas"
                        />
                        <Button variant="contained" color="secondary" sx={{
                            color: '#ffffff'
                        }}>
                            Susisiekti
                        </Button>
                    </Box>

                </Box>
            </Box >

        </>
    )
}

export default Survey;

