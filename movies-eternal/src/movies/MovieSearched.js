import React from 'react';
import PropTypes from 'prop-types';

const MovieSearched = props => {
    return (
        <div className="movie-wrapper">
            <div className="movie-title">{props.movie.title}</div>
            <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + props.movie.poster_path} alt={props.movie.title} className="movie-poster" />
        </div>
    )
}

MovieSearched.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieSearched
