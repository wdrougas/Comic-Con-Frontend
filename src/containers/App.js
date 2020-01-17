import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import {Container,Sidebar,Menu,Image,Icon,Header,Segment} from 'semantic-ui-react'
import MovieCardDetails from '../components/MovieCardDetails';


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

  render() {
    
    return (
  
    <div>
      <Header className='App' as='h1'>Welcome to ComicCon</Header>>
      <div className='ui text container'>
          <br/>
          {
            this.state.movieDetail ?
          <MovieCardDetails movieDetails={this.state.movieDetail}/> : <AllMovies handleClick={this.renderDetails} movies={this.state.movies} />
          }
      </div>
    </div>
    );
  }
}

export default App;

