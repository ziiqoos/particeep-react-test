import React, {Component} from 'react';
import {connect} from "react-redux";
import "./Card.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp, faTrash} from '@fortawesome/free-solid-svg-icons';
import SentimentBar from "../SentimentBar/SentimentBar";
import {deleteMovie, likeMovie, dislikeMovie} from "../../actions";


class Card extends Component {

    deleteMovieCard(id) {
        this.props.deleteMovie(id);
    }

    likeMovie(id) {
        this.props.likeMovie(id);
    }

    dislikeMovie(id) {
        this.props.dislikeMovie(id);
    }

    render() {
        const {movie} = this.props;
        return (
            <div className={"card"}>
                <span className={"title"}>{movie.title}</span> <br/>
                <span>{movie.category}</span>
                <SentimentBar
                    likes={movie.likes}
                    dislikes={movie.dislikes}
                />
                <div className={"rateContainer"}>
                    <FontAwesomeIcon
                        icon={faThumbsUp}
                        className={"likeBtn"}
                        onClick={this.likeMovie.bind(this, movie.id)}
                    />

                    <FontAwesomeIcon
                        icon={faThumbsDown}
                        className={"dislikeBtn"}
                        onClick={this.dislikeMovie.bind(this, movie.id)}
                    /></div>
                <div className={"deleteBtn"}>
                    <FontAwesomeIcon
                        icon={faTrash}
                        className={"deleteBtn"}
                        onClick={this.deleteMovieCard.bind(this, movie.id)}
                    />
                </div>
            </div>
        );
    }
}

export default connect(null, {deleteMovie, likeMovie, dislikeMovie})(Card);
