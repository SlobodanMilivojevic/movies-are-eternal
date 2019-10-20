import React, { Component } from 'react';
import Search from './movies/Search';
import Movies from './movies/Movies';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        movies: [],
        loading: false
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const res = await axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&query=d&page=1&language=en-US&api_key=f1b23c253e07d62f57826623668b43b1');

        this.setState({ movies: res.data.results, loading: false });
    }

    render() {
        return (
            <div className="App">
                <div className="movies-container">
                    <Search />
                    <Movies loading={this.state.loading} movies={this.state.movies} />
                </div>
            </div>
        );
    }
}

export default App;
