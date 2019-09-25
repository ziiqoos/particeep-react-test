import {CATEGORIES_FETCH, DELETE_MOVIE, DISLIKE_MOVIE, LIKE_MOVIE, MOVIES_FETCH} from "../actions/types";

const INITIAL_STATE = {
    movies: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIES_FETCH:
            return {...state, movies: action.payload.movies};
        case DELETE_MOVIE:
            return {...state, movies: state.movies.filter((movie) => movie.id !== action.payload.id)};
        case LIKE_MOVIE:
            return {
                ...state, movies: state.movies.map((movie) => {
                    if (movie.id === action.payload.id) {
                        movie.likes++;
                        return movie
                    }
                    return movie;

                })
            };
        case DISLIKE_MOVIE:
            return {
                ...state, movies: state.movies.map((movie) => {
                    if (movie.id === action.payload.id) {
                        movie.dislikes++;
                        return movie;
                    }
                    return movie;

                })
            };
        case CATEGORIES_FETCH:
            return {
                ...state, categories: action.payload.categories
            };
        default:
            return state;
    }
};
