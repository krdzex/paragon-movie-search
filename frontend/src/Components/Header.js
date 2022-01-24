import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import SearchBar from './SearchBar';


const useStyles = makeStyles({
    toolBar: {
        display: "flex",
        justifyContent: "space-between"
    },
    appBar: {
        position: "static",
        color: "default",
        borderBottom: "1px solid black"
    },
    links: {
        marginRight: "25px",
        textDecoration: "none",
        fontSize: "20px",
        color: "black",
        marginTop: "5px"
    },
    search: {
        position: 'relative',
        border: "1px solid black",
        marginLeft: 0,
        maxWidth: '200px',
        paddingLeft: "28px",
        paddingRight: "10px",
        borderRadius: "20px",
        height: "50px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: "5px",

    },
})

const Header = () => {
    const classes = useStyles();



    return (
        <AppBar className={classes.appBar} color="default">
            <Toolbar className={classes.toolBar}>
                <Typography variant='h4'>
                    Paragon Movie Search
                </Typography>
                <SearchBar />
            </Toolbar>
        </AppBar>
    );
};

export default Header;