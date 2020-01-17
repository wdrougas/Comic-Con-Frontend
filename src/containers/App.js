import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import {Container,Sidebar,Menu,Image,Icon,Header,Segment} from 'semantic-ui-react';
import MovieCardDetails from '../components/MovieCardDetails'
import {Route, Switch} from 'react-router-dom'
import MovieCard from '../components/MovieCard';


class App extends React.Component {

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

renderDetails = (card) => {
  this.setState({movieDetail: card})
}

resetMovieDetailState = () => {
  this.setState({
    movieDetail: null
  })
}

  render() {
    
    return (
  
    <div>
      <Header className='App' as='h1'>Welcome to ComicCon</Header>
      <Switch>
      <div className='ui text container'>
          <br/>
          
          <Route path='/movies/:id' render={(props) => {
            let movieID = parseInt(props.match.params.id)
            let foundMovie = this.state.movies.find(movie => movie.id === movieID)
          return <MovieCardDetails movieDetails={foundMovie} resetMovieDetailState={this.resetMovieDetailState} />}} />

          <Route exact path ='/' render={(props) => {return <AllMovies handleClick={this.renderDetails} movies={this.state.movies} />} }/>
          </div>
      </Switch>
    </div>
    );
  }
}

export default App;



{/* <div>
<Header className='App' as='h1'>Welcome to ComicCon</Header>
<Switch>
<div className='ui text container'>
    <br/>
    {
      this.state.movieDetail ?
    <MovieCardDetails resetMovieDetailState={this.resetMovieDetailState} 
    movieDetails={this.state.movieDetail}/> : 
    <AllMovies handleClick={this.renderDetails} movies={this.state.movies} />
    }
</div>
</Switch>
</div> */}

