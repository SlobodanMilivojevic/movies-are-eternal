import React, {Component} from 'react';
import MovieSearched from '../movie-searched/MovieSearched';
import Spinner from '../../assets/Spinner';
import './Movies.css';
import PropTypes from 'prop-types';

class Movies extends Component {
    state = {
        favorites: []
    };

    FavoriteList = fav => {
        let favoriteArray = this.state.favorites;
        if(favoriteArray.includes(fav)) {
            
        } else {
            favoriteArray.push(fav);
        }
        
        this.setState({ favorites: favoriteArray });
        console.log(this.state.favorites);
    }

    render() {
        if(this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div className="grid-movies">
                    {this.props.movies.map(movie => (
                        <MovieSearched key={movie.id} movie={movie} favorites={this.FavoriteList} />
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
