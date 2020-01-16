import React from 'react'
import MovieCard from './MovieCard'


export default class AllMovies extends React.Component {
    render() {
        return (
        <div class="ui grid">
            
            {this.props.movies.map(movie => <MovieCard movie={movie}/>) }</div>
        )
    }
}