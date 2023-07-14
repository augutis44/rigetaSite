import { Box, TextField } from "@mui/material";

const Survey = () => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Vardas"
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue="Pavardė"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="El.paštas"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Klausimas"
                />
            </div>
        </Box>
    )
}

export default Survey;

