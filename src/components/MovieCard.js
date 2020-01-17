import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MovieCard = (props) => (
    <div className= "four wide column">

    <Card>
      <Image src={props.movie.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.movie.name}</Card.Header>
        <Card.Meta>
          Rating: 
          <span> {props.movie.rating}</span>
        </Card.Meta>
      </Card.Content>
      <Link to={`/movies/${props.movie.id}`}>
      <div className="ui vertical animated button" tabIndex="0" >
      <div className="visible content">
      <i className="film icon"></i>
      </div>
      </div>
      </Link>

    </Card> 
    </div>
  )

  
  
  export default MovieCard 

      