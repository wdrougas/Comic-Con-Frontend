import React from 'react'
import Header from '../components/Header'
import AllMovies from '../components/AllMovies'
import Searchbar from '../components/Searchbar'
import Favorites from '../components/Favorites'


export default class MainContainer extends React.Component {

    constructor() {
        super() 
        this.state = {
            movies: [],
            favorites: [],
            movieDetail: null,
        }
    }


    componentDidMount = () => {
        fetch('http://localhost:3000/movies?limit=6')
        .then(res => res.json())
        .then(movies => this.setState({movies}))
    }

    render() {
        return (
            <div class='ui text container'>
                <Header />
                <AllMovies movies={this.state.movies}/>
                <Searchbar />
                <Favorites />
            </div>
        )
    }
}