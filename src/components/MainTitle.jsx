import { Card, Typography, useMediaQuery } from "@mui/material";
import { SideBox } from "../helpers/StyledBox";
import { useTheme } from '@mui/material/styles';


const MainTitle = ({ children }) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{
            backgroundImage: "url('public/low-angle-shot-modern-business-building-touching-clear-sky.jpg')",
            height: '15rem',
            backgroundRepeat: 'round',
            display: 'flex',
            alignItems: 'center',
        }}>
            <SideBox>
                <Typography variant={isDownSm ? 'h2' : 'h1'} sx={{
                    color: '#ffffff',
                    marginTop: '5rem',
                    marginLeft: '1rem'
                }}>
                    {children}
                </Typography>
            </SideBox>
        </Card>
    )
}

export default MainTitle;
