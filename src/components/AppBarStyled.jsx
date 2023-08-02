import * as React from 'react';
import { AppBar, Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import RegitaLogo from '../icons/RegitaLogo';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { FlexBox } from '../helpers/StyledBox';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 240;

const AppBarStyled = (props) => {
    const [scrolling, setScrolling] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0 && !scrolling) {
            setScrolling(true);
        } else if (window.scrollY === 0 && scrolling) {
            setScrolling(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const links = [
        {
            label: 'Pagrindinis',
            to: '/'
        },
        {
            label: 'Paslaugos',
            to: '/services'
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
                    <Button disableRipple sx={{
                        color: { xs: '#000000', md: '#ffffff' },
                        textDecoration: isActive ? 'underline' : 'none'
                    }}>
                        {link.label}
                    </Button>
                )}
            </StyledNavLink>
        );
    });

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <AppBar sx={{
                    padding: { xs: 'auto', md: '0.5rem 8rem' },
                    position: 'fixed',
                    backgroundColor: scrolling ? 'rgba(39, 67, 103, 1)' : 'rgba(39, 67, 103, 0.7)', // Change opacity based on scrolling
                    transition: 'background-color 0.7s', // Add transition for smooth effect
                }}>
                    <Toolbar>
                        <Box sx={{
                            margin: { xs: '1rem', md: 'none' },
                            display: { xs: 'flex', md: 'none' },
                            width: { xs: '100%', md: 'none' },
                            flexDirection: { xs: 'row-reverse', md: 'none' }
                        }}>
                            <Box sx={{
                                display: { xs: 'flex', md: 'none' }
                            }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        mr: 2,
                                        display: { md: 'none' }
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{
                                flexGrow: 1
                            }}>
                                <RegitaLogo variant='white' width="205px" height="55px" />
                            </Box>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}>
                            <RegitaLogo variant='white' width="205px" height="55px" />
                        </Box>
                        <FlexBox sx={{
                            display: { xs: 'none', md: 'block' }
                        }}>
                            {renderedLinks}
                        </FlexBox>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}>
                        {renderedLinks}
                    </Drawer>
                </Box>
            </React.Fragment>
        </>
    )
}

export default AppBarStyled;