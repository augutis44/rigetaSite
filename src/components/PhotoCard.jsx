import { Box } from "@mui/material";
import { FlexBox } from "../helpers/StyledBox";

const PhotoCard = ({ children, src, pictureVariant }) => {

    return (
        <FlexBox sx={{
            alignItems: 'center',
            margin: '5rem 9.5rem',
            flexDirection: pictureVariant === 'right' ? 'row-reverse' : 'row'
        }}>
            <Box component="img" src={src} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0rem 2rem',
            }}>
                {children}
            </Box>
        </FlexBox>
    )

}

export default PhotoCard;