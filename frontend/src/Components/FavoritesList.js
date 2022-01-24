import { Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deleteMovie, loadFavouriteMovies } from '../Actions';
import { listFavorite } from '../ApiServices/movies-api';
const useStyles = makeStyles({
    grid: {
        cursor: "pointer",
        padding: "20px",

    },

    typography: {
        wordBreak: "break-all"
    }
})


const FavoritesList = () => {
    const dispatch = useDispatch()
    const favoriteMovies = useSelector(state => state.likedMovies)
    const classes = useStyles();
    useEffect(() => {
        listFavorite().then(res => dispatch(loadFavouriteMovies(res))).catch(err => console.log(err))
    }, [])

    return (
        <Grid container>
            {favoriteMovies.map((movie, i) => {
                return <Grid container key={i}>
                    <Grid item sm={10} xs={12}>
                        <Typography variant='h5' className={classes.typography}>{movie.l}</Typography>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <FavoriteIcon />
                    </Grid>
                </Grid>
            })
            }
        </Grid>
    );
};

export default FavoritesList;