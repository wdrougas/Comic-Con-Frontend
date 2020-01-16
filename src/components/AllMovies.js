import React from 'react'
import MovieCard from './MovieCard'


export default class AllMovies extends React.Component {
    render() {
        return (
        <h1>{this.props.movies.map(movie => <MovieCard movie={movie}/>) }</h1>
        )
    }
}