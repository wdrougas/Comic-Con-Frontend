import React from 'react'
import Header from '../components/Header'
import AllMovies from '../components/AllMovies'
import Searchbar from '../components/Searchbar'
import Favorites from '../components/Favorites'
import { Container } from 'semantic-ui-react'


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
        fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(movies => this.setState({movies}))
    }



    render() {
        return (
            <div class='ui text container'>
                <br></br>
                <Header />
                <br></br>
                <Container>
                <AllMovies movies={this.state.movies} />
                </Container>
            </div>
        )
    }
}

