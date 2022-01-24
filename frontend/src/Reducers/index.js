import { combineReducers } from "redux";
import allMovies from "./moviesReducers";
import selectedMovieReducer from "./selectedMovieReducer";
import likedMovies from "./likedMovies";

const allReducer = combineReducers({
    allMovies,
    selectedMovie: selectedMovieReducer,
    likedMovies

})
export default allReducer