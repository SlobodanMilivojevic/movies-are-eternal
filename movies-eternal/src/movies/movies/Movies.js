import React, {Component} from 'react';
import MovieSearched from '../movie-searched/MovieSearched';
import Spinner from '../../assets/Spinner';
import './Movies.css';
import PropTypes from 'prop-types';

class Movies extends Component {
    state = {
        favorites: []
    };

    componentDidMount() {
        const local = JSON.parse(localStorage.getItem("favorites"));
        if(local !== null) {
            this.setState({
                favorites: local
            });
        }
    }

    FavoriteList = fav => {
        let favoriteUpdate = this.state.favorites;

        if(favoriteUpdate.includes(fav)) {
            favoriteUpdate = favoriteUpdate.filter(item => item !== fav);
            localStorage.setItem("favorites", JSON.stringify(favoriteUpdate));
            this.setState({
                favorites: favoriteUpdate
            });
        }
        else {
            favoriteUpdate.push(fav);
            localStorage.setItem("favorites", JSON.stringify(favoriteUpdate));
            this.setState({
                favorites: favoriteUpdate
            });
        }
    }

    render() {
        if(this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div className="grid-movies">
                    {this.props.movies.map(movie => (
                        <MovieSearched key={movie.id} movie={movie} infavorites={this.state.favorites.includes(movie.id)} favorites={this.FavoriteList} />
                    ))}
                </div>
            );
        }
    }
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Movies
