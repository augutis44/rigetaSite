import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { ColumnFlexBox } from "../helpers/StyledBox";
import Buttons from "./Buttons";


const ItemCard = ({ label, price, content }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ColumnFlexBox>
                <Box id='firstHalf' sx={{
                    backgroundColor: '#E7EDFF',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem 3rem',
                    textAlign: 'center',
                    borderRadius: '0.5rem 0.5rem 0rem 0rem'
                }}>
                    <Typography variant='h5'>
                        {label}
                        <Divider variant="middle" sx={{
                            borderBottomWidth: '0.1rem',
                            borderColor: '#000000',
                            margin: '0.5rem 0rem '
                        }} />
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        margin: '1.5rem 0rem'
                    }}>
                        <Typography>
                            €
                        </Typography>
                        <Typography variant='h2' sx={{
                            fontWeight: '600'
                        }}>
                            {price}
                        </Typography>
                    </Box>
                    <Typography sx={{
                        margin: '0.5rem 0rem',
                        fontWeight: '300'
                    }}>
                        Kaina vienam mėnesiui
                    </Typography>
                    <Button variant="contained" sx={{
                        backgroundColor: '#E63946',
                        margin: '2rem 0rem',
                        textTransform: 'capitalize',
                        boxShadow: '3',
                        fontWeight: '400',
                        '&:hover': {
                            backgroundColor: '#f8847f',
                            color: '#FFFFFF',
                        }
                    }}>
                        <Typography variant='h5' sx={{
                            textTransform: 'none',
                            padding: '0.3rem 1rem',
                        }}>
                            Susisiekti
                        </Typography>
                    </Button>
                </Box>
                <Box id='secondHalf' sx={{
                    borderStyle: 'solid',
                    borderWidth: '0px 1px 1px 1px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    borderRadius: '0rem 0rem 0.5rem 0.5rem'

                }}>
                    <Box sx={{
                        margin: '0.5rem',
                    }}>
                        {content.map((contentInRow, index) => {
                            return (
                                <Typography key={index} sx={{
                                    margin: '1rem',

                                }}>
                                    {contentInRow}
                                </Typography>
                            )
                        })}
                    </Box>
                </Box>
            </ColumnFlexBox>
        </Grid>
    )

}

export default ItemCard;