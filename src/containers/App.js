import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import MovieCardDetails from '../components/MovieCardDetails'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import Searchbar from '../components/Searchbar'
import swal from 'sweetalert'
import LoginForm from '../components/LoginForm'
import FavoriteButton from '../components/FavoriteButton'
import AllMoviesButton from '../components/AllMoviesButton'


class App extends React.Component {

  constructor() {
    super() 
    this.state = {
        movies: [],
        favorites: [],
        movieDetail: null,
        search: '',
        currentUser: null,
        sort: ''
    }
}


componentDidMount = () => {
  fetch('http://localhost:3000/movies')
  .then(res => res.json())
  .then(movies => this.setState({movies}))
}


onSearch = (event) => {
  this.setState({search: event.target.value})
}

filteredMovies = (movies) => {
  return movies.filter(movie => movie.name.toLowerCase().includes(this.state.search.toLowerCase()))
}

updateUser = (user) => {
  this.setState({currentUser: user})
} 

logout = () => {
  this.setState({currentUser: null})
}


showFavorites = (user) => {
  fetch(`http://localhost:3000/users/${user.id}`)
  .then(resp => resp.json())
  .then(data => this.setState({favorites: data.favorites}))
}  



addFavorites = (movieDetails) => {
    const configOptions = {
        method:"POST" ,
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        } ,
        body: JSON.stringify({user_id: this.state.currentUser.id, movie_id: movieDetails.id}) 
    }

    fetch('http://localhost:3000/favorites',configOptions)
    .then(response => response.json())
    .then(data => {
      if (data.message === "Movie added to favorites!") {
        let newObj = JSON.parse(data.favorite)
        this.setState({favorites: [...this.state.favorites, newObj]})
        swal("Done!", data.message, "success")
      } else {
        swal("Error!", data.message, 'error')
      }
    })

  }

  removeFromFavorites = (favoriteObj) => {
  
      const configOptions = {
        method:"DELETE",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      }
      const removalIndex = this.state.favorites.findIndex(favorite => favorite.id === favoriteObj.id)
      fetch(`http://localhost:3000/favorites/${favoriteObj.id}`, configOptions)
      .then(response => response.json())
      .then(favorite => this.setState({favorites: [...this.state.favorites.slice(0, removalIndex), ...this.state.favorites.slice(removalIndex + 1)]}))
      this.props.history.push(`/favorites/${this.state.currentUser.id}`)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  sortMovies = (movieArray) => {
    switch(this.state.sort) {
      case 'name':
        return movieArray.sort((a, b) => a.name > b.name ? 1 : -1)
        default:
          return movieArray
    }
  }


  render() {
    
    return (
  
    <div>
      <HeaderComponent handleClick={this.logout} user={this.state.currentUser}/>
      <br/> 

      <Switch>
      {/* <div className='ui text container'> */}
          <Route exact path ="/login" render={() => this.state.currentUser ? <Redirect to='/' />: <LoginForm updateUser={this.updateUser}/>} />
          <Route exact path ='/' render={() => this.state.currentUser ? <div> <Searchbar onSearch={this.onSearch} handleChange={this.handleChange}/> <FavoriteButton user={this.state.currentUser} handleClick={this.showFavorites}/> <br/><AllMovies user={this.state.currentUser} movies={this.filteredMovies(this.state.movies)} /></div> : <Redirect to="/login" /> }/>
          <Route path='/movies/:id' render={(props) => {
            let movieID = parseInt(props.match.params.id)
            let foundMovie = this.state.movies.find(movie => movie.id === movieID)
          return foundMovie ? <MovieCardDetails 
          movieDetails={foundMovie} 
          addFavorites ={this.addFavorites}
          removeFromFavorites={this.removeFromFavorites}
          favorites={this.state.favorites}
          />: null}} /> 
          <Route exact path='/favorites/:id' render={() => this.state.favorites ? <div> <AllMoviesButton user={this.state.currentUser} handleClick={this.showFavorites}/> <br/> <AllMovies movies={this.state.favorites.map(favorite => favorite.movie)} /></div> : null}/>
      </Switch>
    </div>
    );
  }
}


{/* <Searchbar onSearch={this.onSearch} handleChange={this.handleChange}/>  */}


export default withRouter(App)






