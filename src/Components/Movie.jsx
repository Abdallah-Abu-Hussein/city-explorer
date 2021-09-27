import React, { Component } from "react";
import MovieDay from "./MovieDay";
class Movie extends Component {
    render() {
        return (
            <div>
                <MovieDay title={this.props.movieInfo.title} overview={this.props.movieInfo.overview}
                    average_votes={this.props.movieInfo.average_votes} total_votes={this.props.movieInfo.total_votes}
                    image_url={this.props.movieInfo.image_url} alt={this.props.movieInfo.title}
                    popularity={this.props.movieInfo.popularity} released_on={this.props.movieInfo.released_on} />
       
            </div>
        )
    }
}
export default Movie