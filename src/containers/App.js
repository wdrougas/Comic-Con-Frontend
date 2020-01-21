import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import {Container,Sidebar,Menu,Image,Icon,Segment} from 'semantic-ui-react';
import MovieCardDetails from '../components/MovieCardDetails'
import {Route, Switch} from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'



class App extends React.Component {

  constructor() {
    super() 
    this.state = {
        movies: [],
        favorites: [],
        movieDetail: null,
        search: ''
    }
}

componentDidMount = () => {
  fetch('http://localhost:3000/movies')
  .then(res => res.json())
  .then(movies => this.setState({movies}))
}

renderDetails = (card) => {
  this.setState({movieDetail: card})
}

onSearch = (event) => {
  this.setState({search: event.target.value})
}

filteredMovies = () => {
  return this.state.movies.filter(movie => movie.name.toLowerCase().includes(this.state.search.toLowerCase()))
}


  render() {
    
    return (
  
    <div>
      <Header />
      {this.state.movieDetail ? null : <Searchbar onSearch={this.onSearch}/>}
      <Switch>
      <div className='ui text container'>
          <br/>
          
          <Route path='/movies/:id' render={(props) => {
            let movieID = parseInt(props.match.params.id)
            let foundMovie = this.state.movies.find(movie => movie.id === movieID)
          return foundMovie ? <MovieCardDetails movieDetails={foundMovie} />: null}} />

          <Route exact path ='/' render={(props) => {return <AllMovies handleClick={this.renderDetails} movies={this.filteredMovies()} />} }/>
          </div>
      </Switch>
    </div>
    );
  }
}

export default App;


