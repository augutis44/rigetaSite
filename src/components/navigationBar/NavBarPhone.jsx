import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import RegitaLogo from '../../icons/RegitaLogo';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#274367',
    textTransform: 'uppercase',
    padding: '1.5rem',
    borderBottom: '1px solid #274367',

}

const NavBarPhone = ({ renderedLinks }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'space-between'
            }}>

                <Box sx={{
                    flexGrow: 1
                }}>
                    <NavLink
                        to='/'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 'fit-content'
                        }}>
                        <RegitaLogo variant='white' width="10rem" height="3rem" />
                    </NavLink>
                </Box>

                <Box sx={{
                    display: { xs: 'flex', md: 'none' }
                }}>
                    <IconButton
                        color="inherit"
                        // aria-label="open drawer"
                        // edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

            </Box>

            <Box component="nav">
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {renderedLinks(linkStyle, mobileOpen)}
                </Drawer>
            </Box>
        </>
    )
}

NavBarPhone.propTypes = {
    renderedLinks: PropTypes.func.isRequired,
}

export default NavBarPhone
