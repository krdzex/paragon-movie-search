import React, { useEffect, useState } from 'react';
import { InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchMovies, listMovies } from '../ApiServices/movies-api';
import { useDispatch } from 'react-redux';
import { deleteAllMovies, getAllMovies } from '../Actions';

const useStyles = makeStyles({
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


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch()
    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: { q: searchValue },
        headers: {
            'x-rapidapi-key': '17c0801264msh8e4eb2e0281c145p1013e9jsna02d9582b2b0',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    const classes = useStyles();

    const onSearch = (e) => {
        e.preventDefault()
        dispatch(deleteAllMovies());
        listMovies(searchValue).then(res => {
            if (res.length > 0) {
                dispatch(getAllMovies(res))
            } else {
                getSearchMovies(options, data => {
                    dispatch(getAllMovies(data))
                })
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        options.params.q = "Marvel"
        getSearchMovies(options, data => {
            dispatch(getAllMovies(data))
        })
    }, [])


    const onChange = (e) => {
        setSearchValue(e.target.value)
    }



    return (
        <form onSubmit={onSearch}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search..." sx={{ fontSize: "25px" }} value={searchValue} onChange={onChange}
                />
            </div>
        </form>
    );
};

export default SearchBar;