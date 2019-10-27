import React, {Component} from 'react';
import MovieSearched from '../movie-searched/MovieSearched';
import Spinner from '../../assets/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import './Movies.css';
import PropTypes from 'prop-types';

class Movies extends Component {
    state = {
        favorites: [],
        watch: [],
        buttonList: false
    };

    componentDidMount() {
        const localFavorites = JSON.parse(localStorage.getItem("favorites"));
        const localWatch = JSON.parse(localStorage.getItem("watchlist"));

        if(localFavorites !== null) {
            this.setState({
                favorites: localFavorites
            });
        }
        if(localWatch !== null) {
            this.setState({
                watch: localWatch
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

    WatchList = watchMovie => {
        let watchUpdate = this.state.watch;

        if(watchUpdate.includes(watchMovie)) {
            watchUpdate = watchUpdate.filter(item => item !== watchMovie);
            localStorage.setItem("watchlist", JSON.stringify(watchUpdate));
            this.setState({
                watch: watchUpdate
            });
        }
        else {
            watchUpdate.push(watchMovie);
            localStorage.setItem("watchlist", JSON.stringify(watchUpdate));
            this.setState({
                watch: watchUpdate
            });
        }
    }

    ButtonListToggle = () => {
        this.setState({
            buttonList: !this.state.buttonList
        });
    }

    render() {
        if(this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div className="grid">
                    {this.state.watch.length !== 0 &&
                        <div className="watch-list-holder">
                            <div className={"watch-button " + (this.state.buttonList ? 'active' : 'disabled')} onClick={() => {this.ButtonListToggle()}}><FontAwesomeIcon icon={faList} /></div>
                            <ul className="watch-list">
                                {this.state.watch.map(moviename => {
                                    return <li key={moviename}>{moviename}</li>;
                                })}
                            </ul>
                        </div>
                    }
                    <div className="grid-movies">
                        {this.props.movies.map(movie => (
                            <MovieSearched key={movie.id} movie={movie} inwatchlist={this.state.watch.includes(movie.title)} infavorites={this.state.favorites.includes(movie.id)} watch={this.WatchList} favorites={this.FavoriteList} />
                        ))}
                    </div>
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
