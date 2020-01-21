import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import {Container,Sidebar,Menu,Image,Icon,Segment} from 'semantic-ui-react';
import MovieCardDetails from '../components/MovieCardDetails'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import swal from 'sweetalert'
import LoginForm from '../components/LoginForm'
import FavoriteButton from '../components/FavoriteButton'


class App extends React.Component {

  constructor() {
    super() 
    this.state = {
        movies: [],
        favorites: [],
        movieDetail: null,
        search: '',
        currentUser: null
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

filteredMovies = () => {
  return this.state.movies.filter(movie => movie.name.toLowerCase().includes(this.state.search.toLowerCase()))
}

updateUser = (user) => {
  this.setState({currentUser: user})
} 

/*  Added to render favorites */ 
updateFavorites = () => {
  fetch('http://localhost:3000/favorites')
  .then(response => response.json())
  .then(AllFavorites => console.log(AllFavorites)) 
  //  .then(AllFavorites =>  {
       
  //  })  
}  

 

addFavorites = (movieDetails) => {
    const configOptions = {
        method:"POST" ,
        headers: {
          "Content-Type":"application/json",
          "Accept":"applicatoin/json"
        } ,
        body: JSON.stringify({user_id: this.state.currentUser.id, movie_id: movieDetails.id}) 
    }

    fetch('http://localhost:3000/favorites',configOptions)
    .then(response => response.json())
    .then(data => { 
      if (data.message === "Movie added to favorites!") {
        swal("Done!", data.message, "success")
      } else {
        swal("Error!", data.message, 'error')
      }
    })

  }


  render() {
    
    return (
  
    <div>
      <Header user={this.state.currentUser}/>
      {this.state.movieDetail ? null : <Searchbar onSearch={this.onSearch}/>} 

      {
        this.state.currentUser ? <FavoriteButton updateFavorites={this.updateFavorites} /> : null 
      } 
      <br/> 

      <Switch> 
  
          <Route exact path ="/login" 
          render={() => this.state.currentUser ? <AllMovies user={this.state.currentUser} 
          movies={this.filteredMovies()}/>: <LoginForm updateUser={this.updateUser}/>} />

          <Route exact path ='/' render={() => this.state.currentUser ? <AllMovies user={this.state.currentUser} 
          movies={this.filteredMovies()}/> : <Redirect to="/login" /> }/>

          <Route path='/movies/:id' render={(props) => {
            let movieID = parseInt(props.match.params.id)
            let foundMovie = this.state.movies.find(movie => movie.id === movieID)
          return foundMovie ? <MovieCardDetails 
          movieDetails={foundMovie} 
          addFavorites ={this.addFavorites}
          />: null}} /> 

      </Switch>
    </div>
    );
  }
}

export default App;


