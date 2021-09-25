import React, { Component } from "react";
import '../style.css';
class Movie extends Component {
    render() {
        return (
            <div className={'container'}>
            <div>
                            <p>Title: {this.props.movieInfo.title}</p>
                            <p>Overview: {this.props.movieInfo.overview}</p>
                            <p>Average Votes: {this.props.movieInfo.average_votes}</p>
                            <p>Total Votes: {this.props.movieInfo.total_votes}</p>
                            <p>Popularity: {this.props.movieInfo.popularity}</p>
                            <p>Released On: {this.props.movieInfo.released_on}</p>
                            <img src={this.props.movieInfo.image_url} alt={this.props.movieInfo.title} />
            </div>
            </div>
        )
    }
}
export default Movie