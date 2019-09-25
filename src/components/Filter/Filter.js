import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCategories, moviesFetch} from "../../actions";
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        props.fetchCategories();
    }


    render() {
        if (this.props.categories)
            return (
                <div className={"selectContainer"}>
                    <select multiple className={"select"}>
                        {
                            this.props.categories.map((category, index) => {
                                return (
                                    <option key={index} value={category}>{category}</option>
                                );
                            })
                        }
                    </select>
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
    if (state.movies.categories) {
        return state.movies;
    } else
        return {};
};

export default connect(mapStateToProps, {moviesFetch, fetchCategories})(Filter);
