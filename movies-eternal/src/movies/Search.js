import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ""
    };

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text !== "") {
            this.props.searchMovies(this.state.text);
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' placeholder='Search movies...' value={this.state.text} onChange={this.onChange} />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
