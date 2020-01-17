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
      <Header className='App' as='h1'>Welcome to ComicCon</Header>
  <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='video play' />
          Login
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='video' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='search' />
          Search
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='film' />
          Favorites
        </Menu.Item>
      </Sidebar>
  
  
      
      <Sidebar.Pusher>
        <div className='ui text container'>
          <br/>
          <AllMovies movies={this.state.movies} />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
    );
  }
}

export default App;

