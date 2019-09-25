import React, {Component} from 'react';
import Card from "../Card/Card";
import {connect} from "react-redux";
import {moviesFetch} from "../../actions";

class List extends Component {

    constructor(props) {
        super(props);
        props.moviesFetch();
    }

    renderMovieCard(movie) {
        return (
            <Card key={movie.id} movie={movie}/>
        );
    }

    render() {
        if (this.props.movies)
            return (
                <div>
                    {
                        this.props.movies.map((movie) => {
                            return this.renderMovieCard(movie);
                        })
                    }
                </div>
            );
        else return (
            <div>
                Loading...
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.movies;
};

export default connect(mapStateToProps, {moviesFetch})(List);
