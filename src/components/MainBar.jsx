import { AppBar, Box, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import RegitaLogo from '../icons/RegitaLogo';

const MainBar = () => {

    const links = [
        { label: 'Pagrindinis' },
        { label: 'Apie' },
        { label: 'Kontaktai' }
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Button key={link.label} sx={{ color: '#fff' }}>{link.label}</Button>
        );
    });

    console.log(renderedLinks);

    return (
        <AppBar sx={{ padding: '0.5rem 8rem', opacity: '100%' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <RegitaLogo variant='white' width="205px" height="55px" />
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {renderedLinks}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MainBar;