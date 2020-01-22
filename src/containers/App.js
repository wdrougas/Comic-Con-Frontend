import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import MovieCardDetails from '../components/MovieCardDetails'
import {Route, Switch, Redirect} from 'react-router-dom'
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
        favoriteObjects: [],
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
  .then(data => this.setState({favorites: data.movies}))
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
        this.setState({favoriteObjects: [...this.state.favoriteObjects, newObj]})
        swal("Done!", data.message, "success")
      } else {
        swal("Error!", data.message, 'error')
      }
    })

  }

  // NOT WORKING
  // removeFromFavorites = (favoriteObj) => {
  //   if (this.state.favoriteObjects.includes(favoriteObj)) {
  //     const configOptions = {
  //       method:"DELETE",
  //       headers: {
  //         "Content-Type":"application/json",
  //         "Accept":"application/json"
  //       }
  //     }
  //     fetch(`http://localhost:3000/favorites/${favoriteObj[0].id}`, configOptions)
  //     .then(response => response.json())

  //   } else {
  //     alert("Movie is not included in your favorites")
  //   }
  // }

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
          />: null}} /> 
          <Route exact path='/favorites/:id' render={() => this.state.favorites ? <div> <Searchbar onSearch={this.onSearch} handleChange={this.handleChange}/> <AllMoviesButton user={this.state.currentUser} handleClick={this.showFavorites}/> <br/> <AllMovies movies={this.filteredMovies(this.state.favorites)} /></div> : null}/>
      </Switch>
    </div>
    );
  }
}





export default App






