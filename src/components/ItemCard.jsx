import { Box, Divider, Grid, Typography } from "@mui/material";
import { ColumnFlexBox } from "../helpers/StyledBox";
import Buttons from "./Buttons";


const ItemCard = ({ label, price, content }) => {
    return (
        <Grid item xs={12} sm={6} md={4} spacing={2}>
            <ColumnFlexBox sx={{
            }}>
                <Box id='firstHalf' sx={{
                    backgroundColor: '#EDF5FF',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem 3rem',
                    textAlign: 'center'
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
                    <Buttons type='red' sx={{
                        margin: '2rem 0rem'
                    }}>
                        <Typography variant='h5' sx={{
                            textTransform: 'none',
                            padding: '0.3rem 1rem'
                        }}>
                            Susisiekti
                        </Typography>
                    </Buttons>
                </Box>
                <Box id='secondHalf' sx={{
                    borderStyle: 'solid',
                    borderWidth: '0px 1px 1px 1px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    backgroundColor: '#ffffff'
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