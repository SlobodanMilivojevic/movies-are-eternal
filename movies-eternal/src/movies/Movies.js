import React, {Component} from 'react';
import MovieSearched from './MovieSearched';
import Spinner from '../assets/Spinner';
import PropTypes from 'prop-types';

class Movies extends Component {
    render() {
        if(this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div className="grid-movies">
                    {this.props.movies.map(movie => (
                        <MovieSearched key={movie.id} movie={movie} />
                    ))}
                </div>
            );
        }
    }
}

// const movieItemStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Movies
