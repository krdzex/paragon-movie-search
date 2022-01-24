const likedMovies = (state = [], action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state, action.payload];
        case "LOAD_MOVIES":
            return state = action.payload;
        default:
            return state;
    }
}

export default likedMovies;
