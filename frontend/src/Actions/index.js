export const getAllMovies = (movies) => {
    return {
        type: "ALL_MOVIES",
        payload: movies
    }
}


export const deleteAllMovies = () => {
    return {
        type: "DELETE_ALL_MOVIES"
    }
}

export const likeMovie = (movie) => {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}


export const selectMovie = (movie) => {
    return {
        type: "GET_SELECTED_MOVIE",
        payload: movie
    }
}

export const loadFavouriteMovies = (movies) => {
    return {
        type: "LOAD_MOVIES",
        payload: movies
    }
}


