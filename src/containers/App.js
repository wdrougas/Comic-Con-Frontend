import React from 'react';
import AllMovies from '../components/AllMovies'
import '../App.css';
import {Container,Sidebar,Menu,Image,Icon,Header,Segment} from 'semantic-ui-react'


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

  render() {
    
    return (
  
    <div>
      <Header className='App' as='h1'>Welcome to ComicCon</Header>>
      <div className='ui text container'>
          <br/>
          <AllMovies movies={this.state.movies} />
      </div>
    </div>
    );
  }
}

export default App;

