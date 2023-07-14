import { AppBar, Box, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import RegitaLogo from '../icons/RegitaLogo';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { FlexBox } from '../helpers/StyledBox';

const MainBar = () => {

    const links = [
        {
            label: 'Pagrindinis',
            to: '/'
        },
        {
            label: 'Apie',
            to: '/about'
        },
        {
            label: 'Kontaktai',
            to: '/contacts'
        }
    ];

    const StyledNavLink = styled(NavLink)({
        color: '#fffff',
        textDecoration: 'none',
        '&.active': {
            textDecoration: 'underline',
        },
    });

    const renderedLinks = links.map((link) => {
        return (
            <StyledNavLink key={link.label} to={link.to}>
                {({ isActive }) => (
                    <Button sx={{ color: '#ffffff', textDecoration: isActive ? 'underline' : 'none' }}>
                        {link.label}
                    </Button>
                )}
            </StyledNavLink>
        );
    });

    console.log(renderedLinks);

    return (
        <AppBar sx={{ padding: '0.5rem 8rem', opacity: '100%', position: 'sticky' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <RegitaLogo variant='white' width="205px" height="55px" />
                </Box>
                <FlexBox>
                    {renderedLinks}
                </FlexBox>
            </Toolbar>
        </AppBar>
    )
}

export default MainBar;