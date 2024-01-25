import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import RegitaLogo from '../../icons/RegitaLogo';
import PropTypes from 'prop-types';

const linkStyle = {
    color: '#ffffff',
    textTransform: 'uppercase',
    '&:hover': {
        color: '#d3e6f8'
    }
}

const NavBarPc = ({ renderedLinks }) => {

    return (

        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>

            <Box sx={{
                flexGrow: 1,
            }}>
                <NavLink
                    to='/'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <RegitaLogo variant='white' width="205px" height="55px" />
                </NavLink>
            </Box>

            <Box sx={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                {renderedLinks(linkStyle, false)}
            </Box>

        </Box>
    )
}

NavBarPc.propTypes = {
    renderedLinks: PropTypes.func.isRequired,
}

export default NavBarPc
