import React from 'react';
import MainContainer from './MainContainer'
import '../App.css';
import {Container,Sidebar,Menu,Image,Icon,Header,Segment} from 'semantic-ui-react'

function App() {
  return (
    <Container className="App">

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
    </Sidebar>


    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h1'>Welcome to ComicCon</Header>
      <MainContainer />
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>

    </Container>
  );
}

export default App;

