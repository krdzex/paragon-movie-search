import dbErrorHandler from "../helpers/dbErrorHandler";
import Movie from "../models/movie.model"
import _ from "lodash"

const listMovies = (req, res) => {
    let title = req.query.l;
    Movie.find({ l: { $regex: new RegExp(`${title}`, 'i') } }).then(movies => {
        res.status(200).json(movies)
    })
}

const addMovie = (req, res) => {
    const movie = new Movie(req.body)
    movie.save((err, result) => {
        if (err) {
            return res.status(400).json(
                dbErrorHandler.getUniqueErrorMessage(err)
            )
        }
        res.status(200).json(result)
    })
}

const listFavoriteMovies = (req, res) => {
    Movie.find({ isFavourite: true }).then(movies => {
        res.status(200).json(movies)
    })
}

const updateMovie = async (req, res) => {
    let id = req.param.movieId
    let movie = await Movie.findById(id);
    movie = _.extend(movie, req.body)
    movie.save((err, result) => {
        if (err) {
            return res.status(400).json(
                dbErrorHandler.getUniqueErrorMessage(err)
            )
        }
        res.status(200).json({
            message: "Successfully edited course!"
        })
    })
}





export default { listMovies, addMovie, listFavoriteMovies, updateMovie }