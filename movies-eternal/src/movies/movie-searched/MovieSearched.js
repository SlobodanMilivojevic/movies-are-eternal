import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieSearched.css';
import PropTypes from 'prop-types';

class MovieSearched extends Component {
    Favorites = fav => {
        this.props.favorites(fav);
    }

    render() {
        return (
            <div className="movie-wrapper">
                <div className="movie-title">{this.props.movie.title}</div>
                {this.props.movie.poster_path === null ? (
                    <img src="https://via.placeholder.com/185x278.png" alt="No poster" />
                ) : (
                    <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + this.props.movie.poster_path} alt={this.props.movie.title} className="movie-poster" />
                )}
                <div className="movie-info">
                    <div className="movie-add-watch"><FontAwesomeIcon icon={faList} /></div>
                    <div className={"movie-add-favorite " + (this.props.infavorites ? 'active' : 'disabled')} onClick={() => {this.Favorites(this.props.movie.id)}}><FontAwesomeIcon icon={faStar} /></div>
                    <div className="movie-popularity">Popularity: {this.props.movie.popularity}</div>
                    <div className="movie-release">Release date: {this.props.movie.release_date}</div>
                </div>
            </div>
        );
    }
}

MovieSearched.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieSearched
