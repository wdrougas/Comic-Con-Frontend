import React from 'react'
import MovieCard from './MovieCard'


export default class AllMovies extends React.Component {
    render() {
        return (
        <div className="ui grid">
            
            {this.props.movies.map(movie => <MovieCard key ={movie.id} movie={movie} />) }</div>
        )
    }
}