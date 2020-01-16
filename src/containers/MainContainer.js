import React from 'react'
import Header from '../components/Header'
import AllMovies from '../components/AllMovies'
import Searchbar from '../components/Searchbar'
import Favorites from '../components/Favorites'


export default class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AllMovies />
                <Searchbar />
                <Favorites />
            </div>
        )
    }
}