import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
// import {Container,Sidebar,Menu,Image,Icon,Segment} from 'semantic-ui-react';
import MovieCardDetails from '../components/MovieCardDetails'
import {Route, Switch} from 'react-router-dom'
// import MovieCard from '../components/MovieCard';
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import swal from 'sweetalert'
import LoginForm from '../components/LoginForm'
import Profile from '../components/Profile' 



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

// renderDetails = (card) => {
//   this.setState({movieDetail: card})
// }

onSearch = (event) => {
  this.setState({search: event.target.value})
}

filteredMovies = () => {
  return this.state.movies.filter(movie => movie.name.toLowerCase().includes(this.state.search.toLowerCase()))
}


addFavorites = (movieDetails) => {
  
  const configOptions = {
      method:"POST" ,
      headers: {
        "Content-Type":"application/json",
        "Accept":"applicatoin/json"
      } ,
      body: JSON.stringify({user_id:1 , movie_id: movieDetails.id}) 
  }

  fetch('http://localhost:3000/favorites',configOptions)
  .then(response => {
    if (response.ok) {
      // alert("Movie added to your favorites")
      swal("Great!", "Movie Added to Your Favorites!", "success");
    } else {
      swal("Something went wrong", "failure");
    }
  }) 
  .catch(error => ("this is the error"))
 
}

updateUser = (user) => {
  this.setState({currentUser: user})
} 

  render() {
    return (
    <div>
      <Header />
      {this.state.movieDetail ? null : <Searchbar onSearch={this.onSearch}/>}
      <Switch>
          <Route path='/movies/:id' render={(props) => {
            let movieID = parseInt(props.match.params.id)
            let foundMovie = this.state.movies.find(movie => movie.id === movieID)
          return foundMovie ? <MovieCardDetails movieDetails={foundMovie} addFavorites ={this.addFavorites}
          />: null}} />
          <Route exact path ='/movies' render={(props) => {return <AllMovies movies={this.filteredMovies()} />} }/>
          <Route exact path="/login" render={() => 
          this.state.currentUser ? <AllMovies movies={this.filteredMovies()} user={this.state.currentUser}/> : 
          <LoginForm updateUser={this.state.updateUser}/>  
           } /> 
      </Switch> 
    </div>
    );
  }
}

export default App;


