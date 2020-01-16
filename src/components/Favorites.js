import React from 'react'
import MovieCard from './MovieCard'


export default class Favorites extends React.Component {
    render() {
        return (
            <div>Favorites Component
            
                { this.props.favorites.map(favorite => <MovieCard movie={favorite}/>)}
            </div>
        )
    }
}