import React from 'react';
import '../style.css';

class MovieDay extends React.Component {
    render() { 
        return (
            <div className={'container'}>
            <div>
                            <p>Title: {this.props.title}</p>
                            <p>Overview: {this.props.overview}</p>
                            <p>Average Votes: {this.props.average_votes}</p>
                            <p>Total Votes: {this.props.total_votes}</p>
                            <p>Popularity: {this.props.popularity}</p>
                            <p>Released On: {this.props.released_on}</p>
                            <img src={this.props.image_url} alt={this.props.title} />
            </div>
            </div>
        )
    }
}
 
export default MovieDay;