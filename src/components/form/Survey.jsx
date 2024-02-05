import { Box, Button, TextField, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useEffect, useState, useRef } from "react";
import { Container, TitleTypography } from "../../helpers/StyledBox";
import emailjs from '@emailjs/browser';

const Survey = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 10000);
    }, [showAlert]);

    const sendEmail = () => {

        emailjs
            .sendForm('service_h1w7fui', 'template_gv1xjfa', form.current, {
                publicKey: 'iVf_V-a4kBv1UHw2l',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

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
            case 'phone':
                setPhone(event.target.value);
                break;
            case 'question':
                setQuestion(event.target.value);
                break;
        }
    };

    const handleClick = (e) => {
        e.preventDefault();

        sendEmail();
        setShowAlert(true);
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setQuestion('');
    };

    return (
        <Container>

            <TitleTypography>
                Susisiekite
            </TitleTypography>

            <Typography sx={{
                textAlign: 'center',
                marginBottom: '1rem'
            }}>
                UŽPILDYKITE FORMĄ IR MES SU JUMIS SUSISIEKSIME
            </Typography>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        margin: '0.5rem 0rem',
                    },
                    maxWidth: '900px',
                    width: '100%',
                    margin: '0 auto'
                }}
                noValidate
                autoComplete="off"
                ref={form}
                onSubmit={handleClick}
            >

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '10px'
                }}>
                    <TextField
                        id='name'
                        name="user_name"
                        required
                        label="Vardas"
                        onChange={textFieldChange}
                        value={name}
                        sx={{
                            width: '100%',
                            background: 'white'
                        }}
                    />

                    <TextField
                        id='surname'
                        name="user_surname"
                        label="Pavardė"
                        onChange={textFieldChange}
                        value={surname}
                        sx={{
                            width: '100%',
                            background: 'white'
                        }}
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '10px'
                }}>
                    <TextField
                        id='email'
                        name="user_email"
                        required
                        label="El.paštas"
                        onChange={textFieldChange}
                        value={email}
                        sx={{
                            width: '100%',
                            background: 'white'
                        }}
                    />

                    <TextField
                        id='phone'
                        name="user_phone"
                        label="Tel. nr"
                        onChange={textFieldChange}
                        value={phone}
                        sx={{
                            width: '100%',
                            background: 'white'
                        }}
                    />
                </Box>

                <TextField
                    id='question'
                    name="message"
                    required
                    label="Klausimas"
                    multiline
                    rows={4}
                    onChange={textFieldChange}
                    value={question}
                    sx={{
                        width: '100%',
                        background: 'white'
                    }}
                />

                {showAlert && (
                    <Alert severity="success"
                        sx={{
                            marginY: '1rem'
                        }}>
                        Jūsų žinute gavome, greitu metu susisieksime.
                    </Alert>
                )}

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        padding: '1rem',
                        marginTop: '0.7rem',
                        width: '100%'
                    }}
                >
                    Susisiekti
                </Button>
            </Box>

        </Container>
    );
}

export default Survey;
