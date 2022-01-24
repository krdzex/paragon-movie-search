import express from "express";
import moviesCtrl from "../controller/movie.controller";

const router = express.Router()

router.route("/movies").get(moviesCtrl.listMovies).post(moviesCtrl.addMovie)
router.route("/movies/:movieId").put(moviesCtrl.updateMovie)
router.route("/favourite").get(moviesCtrl.listFavoriteMovies)


export default router;