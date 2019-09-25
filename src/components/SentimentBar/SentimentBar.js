import React, {Component} from 'react';
import './SentimentBar.css'

class SentimentBar extends Component {
    MAX_WIDTH = '';

    constructor(props) {
        super(props);
        this.likes = props.likes;
        this.dislikes = props.dislikes;
        this.MAX_WIDTH = 200;
    }

    getLikesRatio() {
        return this.likes / (this.likes + this.dislikes);
    }

    getDislikesRatio() {
        return this.dislikes / (this.likes + this.dislikes);
    }

    getLikesPixels() {
        return this.MAX_WIDTH * this.getLikesRatio();
    }


    getDislikesPixels() {
        return this.MAX_WIDTH * this.getDislikesRatio();
    }

    render() {
        return (
            <div className={"container"}>
                <span style={{width: this.getLikesPixels()}} className={"likes"}/>
                <span style={{width: this.getDislikesPixels()}} className={"dislikes"}/>
            </div>
        );
    }
}

export default SentimentBar;
