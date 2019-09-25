import {CATEGORIES_FETCH, DELETE_MOVIE, DISLIKE_MOVIE, LIKE_MOVIE, MOVIES_FETCH} from "./types";
import {movies$} from "../movies";

export const moviesFetch = () => {
    return (dispatch) => {
        movies$
            .then(
                (movies) => {
                    dispatch(
                        {
                            type: MOVIES_FETCH,
                            payload: {
                                movies: movies
                            }
                        }
                    );
                }
            )
            .catch((error) => console.error(error));
    };
};


export const deleteMovie = (id) => {
    return {
        type: DELETE_MOVIE,
        payload: {id}
    }
};
export const likeMovie = (id) => {
    return {
        type: LIKE_MOVIE,
        payload: {id}
    }
};
export const dislikeMovie = (id) => {
    return {
        type: DISLIKE_MOVIE,
        payload: {id}
    }
};


export const fetchCategories = () => {

    return (dispatch) => {
        movies$
            .then(
                (movies) => {
                    let categories = movies.map((movie) => {
                        return movie.category;
                    });
                    let categoriesNoDoubles = [...new Set(categories)];
                    dispatch(
                        {
                            type: CATEGORIES_FETCH,
                            payload: {
                                categories: categoriesNoDoubles
                            }
                        }
                    );
                }
            )
            .catch((error) => console.error(error));
    };
};
