import { NavLink } from 'react-router-dom';
import { Box, AppBar, Typography } from '@mui/material';

import { useState, useEffect } from 'react';
import NavBarPhone from './NavBarPhone';
import NavBarPc from './NavBarPc';

import { IoHomeSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { Container } from '../../helpers/StyledBox';

const links = [
    {
        label: 'Pagrindinis',
        to: '/',
        icon: <IoHomeSharp />
    },
    {
        label: 'Paslaugos',
        to: '/services',
        icon: <FaBook />
    },
    {
        label: 'Apie',
        to: '/about',
        icon: <IoPerson />
    },
    {
        label: 'Kontaktai',
        to: '/contacts',
        icon: <MdMessage />
    }
];

const AppBarStyled = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !scrolling) {
                setScrolling(true);
            } else if (window.scrollY === 0 && scrolling) {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrolling]);

    const renderedLinks = (styles, showIcon) => links.map((link) => {
        return (
            <NavLink
                key={link.label}
                to={link.to}
                style={
                    ({ isActive }) => {
                        return {
                            textDecoration: 'none',
                            borderBottom: isActive ? '1px solid white' : '',
                        };
                    }}
            >

                <Typography
                    sx={styles}
                >
                    {showIcon &&
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {link.icon}
                        </Box>}

                    <Box sx={{
                        paddingLeft: { xs: '1rem', md: '0rem' }
                    }}>
                        {link.label}
                    </Box>
                </Typography>
            </NavLink >
        );
    });

    return (

        <AppBar sx={{
            paddingY: '1rem',
            position: 'fixed',
            backgroundColor: scrolling ? 'rgba(39, 67, 103, 1)' : 'rgba(39, 67, 103, 0.7)',
            transition: 'background-color 0.7s',
        }}>
            <Container>
                <NavBarPhone
                    renderedLinks={renderedLinks}
                    scrolling={scrolling}
                />

                <NavBarPc
                    renderedLinks={renderedLinks}
                    scrolling={scrolling}
                />
            </Container>
        </AppBar>

    )
}

export default AppBarStyled;
