import axios from "axios";
import { url } from "../config/config";
const getSearchMovies = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            callback(response.data.d)
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}


const createMovie = (movie) => {

    return fetch(`${url}/movies`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(movie),
    }).then(response => response.json()).catch(err => console.log(err))
}

const listFavorite = () => {
    return fetch(`${url}/favourite`, {
        method: "GET",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },

    }).then(response => response.json()).catch(err => console.log(err))
}

const listMovies = (title) => {
    return fetch(`${url}/movies?l=${title}`, {
        method: "GET",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
    }).then(response => response.json()).catch(err => console.log(err))
}

const updateMovie = (id, data) => {
    return fetch(`${url}/movies/${id}`, {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(response => response.json()).catch(err => console.log(err))
}
export { getSearchMovies, createMovie, listFavorite, listMovies, updateMovie }