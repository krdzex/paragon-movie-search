import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { likeMovie, selectMovie } from '../Actions';
import { createMovie } from '../ApiServices/movies-api';
import FavoriteIcon from '@mui/icons-material/Favorite';
const useStyles = makeStyles({
    grid: {
        cursor: "pointer",
        padding: "20px",

    },
    hugeGrid: {
        border: "1px solid black"
    },
    typography: {
        wordBreak: "break-all"
    }
})


const MovieList = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const movieArray = useSelector(state => state.allMovies);
    const favoriteMovies = useSelector(state => state.likedMovies)

    const chackIfItsLiked = (movie) => {
        let find = favoriteMovies.findIndex(favoriteMovie => favoriteMovie.l === movie.l)
        if (find === -1) {
            return false
        } else {
            return true
        }
    }
    const onLikeClick = (e, movie) => {
        e.stopPropagation()

        if (!chackIfItsLiked(movie)) {
            createMovie({ l: movie.l, i: { imageUrl: movie.i.imageUrl }, y: movie.y, rank: movie.rank, q: movie.q })
                .then(response => dispatch(likeMovie(response)))
                .catch(err => console.log(err))
        }
    }

    const onDislikeClick = (e, movie) => {

    }

    const onModalOpen = (movie) => {
        dispatch(selectMovie(movie))
    }

    return (
        <Grid container className={classes.hugeGrid}>
            {movieArray.map((movie, i) => {
                return <Grid item key={i} xs={12} sm={6} md={3} className={classes.grid} onClick={() => onModalOpen(movie)}>
                    <img alt="movie cover" src={movie.i.imageUrl} style={{ width: "100%" }} />
                    <Grid container>
                        <Grid item sm={19} xs={12}>
                            <Typography variant='h5' className={classes.typography}>{movie.l}</Typography>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            {!chackIfItsLiked(movie) ? <IconButton aria-label="Unlicke" onClick={(event) => onLikeClick(event, { l: movie.l, i: { imageUrl: movie.i.imageUrl }, y: movie.y, rank: movie.rank, q: movie.q })}>
                                <FavoriteBorderIcon />
                            </IconButton> : <IconButton ><FavoriteIcon /></IconButton>}
                        </Grid>
                    </Grid>
                </Grid>
            })}
        </Grid>
    );
};

export default MovieList;