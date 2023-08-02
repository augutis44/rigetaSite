import { Grid, Typography } from "@mui/material";
import ItemCard from "./ItemCard";
import { SideBox } from "../helpers/StyledBox";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// const ServiceNameTypography = styled(Typography)(({theme}) => ({
//     [theme.breakpoints.down('laptop')]: {
//         variant: 'h4',
//       },
// }))

const cardItems = [
    {
        label: 'Mažasis paketas',
        price: '150',
        content: ['iki 10 sąskaitų faktūrų', '1-2 darbuotojai']
    },
    {
        label: 'Vidutinis paketas',
        price: '200',
        content: ['iki 20 sąskaitų faktūrų', '3-5 darbuotojai']
    },
    {
        label: 'Didysis paketas',
        price: '250',
        content: ['iki 50 sąskaitų faktūrų', '5-10 darbuotojai']
    }
]

const PacketCards = () => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SideBox>
            <Grid
            sx={{
                maxWidth: '62rem',
                align: 'center',
                margin: 'auto'
            }}>
                <Typography variant={isDownSm ? 'h4' : 'h2'} sx={{
                    textAlign: 'center',
                    margin: '0rem 0rem 3rem',
                    fontWeight: '400'
                }}
                >
                    Apskaitos paslaugų planai
                </Typography>
                <Grid container spacing={2} sx={{
                    // maxWidth: '65rem',
                    align: 'center',
                    // margin: 'auto'
                }}>
                    {cardItems.map((cardItem) =>
                        <ItemCard key={cardItem.label} label={cardItem.label} price={cardItem.price} content={cardItem.content}>
                        </ItemCard>
                    )}
                </Grid>
            </Grid>
        </SideBox>
    )
}


export default PacketCards;
