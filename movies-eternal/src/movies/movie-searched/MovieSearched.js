import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieSearched.css';
import PropTypes from 'prop-types';

const MovieSearched = ({ movie, favorites, watch, inwatchlist, infavorites }) => {
    const Favorites = fav => {
        favorites(fav);
    }

    const WatchLater = movie => {
        watch(movie);
    }

    return (
        <div className="movie-wrapper">
            <div className="movie-title">{movie.title}</div>
            {movie.poster_path === null ? (
                <img src="https://via.placeholder.com/185x278.png" alt="No poster" />
            ) : (
                <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + movie.poster_path} alt={movie.title} className="movie-poster" />
            )}
            <div className="movie-info">
                <div className={"movie-add-watch " + (inwatchlist ? 'active' : 'disabled')} onClick={() => {WatchLater(movie.title)}}><FontAwesomeIcon icon={faList} /></div>
                <div className={"movie-add-favorite " + (infavorites ? 'active' : 'disabled')} onClick={() => {Favorites(movie.id)}}><FontAwesomeIcon icon={faStar} /></div>
                <div className="movie-popularity">Popularity: {movie.popularity}</div>
                <div className="movie-release">Release date: {movie.release_date}</div>
            </div>
        </div>
    );
}

MovieSearched.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieSearched
