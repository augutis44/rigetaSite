import { Box, Button, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { SideBox, TitleTypography } from "../helpers/StyledBox";



const Survey = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const filledSurvey = `Mano vardas ${name} ${surname}. Noreciau paklausti: ${question}. Prasau susisiekti su manimi siuo el. pastu ${email}`

    const surveyAlert = () => {
        return (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">This is a success alert — check it out!</Alert>
            </Stack>
        );
    }

    const textFieldChange = () => {
        switch (event.target.id) {
            case 'name':
                setName(event.target.value);
                break;
            case 'surname':
                setSurname(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'question':
                setQuestion(event.target.value);
                break;
        }
    }

    const handleClick = () => {
        surveyAlert();
        console.log(filledSurvey);
    }

    return (
        <SideBox>
            <TitleTypography>
                Susisiekite
            </TitleTypography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { margin: '0.5rem 0rem', width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id='name'
                    required
                    label="Vardas"
                    onChange={textFieldChange}
                    value={name}
                />
                <TextField
                    id='surname'
                    label="Pavardė"
                    onChange={textFieldChange}
                    value={surname}
                />
                <TextField
                    id='email'
                    required
                    label="El.paštas"
                    onChange={textFieldChange}
                    value={email}
                />
                <TextField
                    id='question'
                    required
                    label="Klausimas"
                    multiline
                    rows={4}
                    onChange={textFieldChange}
                    value={question}
                />
                <Button variant="contained" color="warning" onClick={handleClick}>
                    Susisiekti
                </Button>
            </Box>
        </SideBox>
    )
}

export default Survey;

