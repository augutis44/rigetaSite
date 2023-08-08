import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import { SideBox, TitleTypography } from "../helpers/StyledBox";

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

    return (
        <SideBox>
            <TitleTypography>
                Apskaitos paslaugų planai
            </TitleTypography>
            <Grid container spacing={2} sx={{
                align: 'center'
            }}>
                {cardItems.map((cardItem) =>
                    <ItemCard key={cardItem.label} label={cardItem.label} price={cardItem.price} content={cardItem.content}>
                    </ItemCard>
                )}
            </Grid>
        </SideBox>
    )
}

export default PacketCards;
