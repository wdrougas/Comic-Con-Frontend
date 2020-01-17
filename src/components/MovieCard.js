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
      <div className="ui vertical animated button" tabIndex="0">
        <Link to={`/movies/${props.movie.id}`} 
        
        
        />
      <div onClick={() => props.handleClick(props.movie)} className="hidden content">Details</div>
      <div className="visible content">
      <i className="film icon"></i>
      </div>
      </div>

    </Card> 
    </div>
  )

  
  
  export default MovieCard 

      
//   <Card>
//   <Image src={props.movie.image_url} wrapped ui={false} />
//   <Card.Content>
//     <Card.Header>Matthew</Card.Header>
//     <Card.Meta>
//       <span className='date'>Joined in 2015</span>
//     </Card.Meta>
//     <Card.Description>
//       Matthew is a musician living in Nashville.
//     </Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//     <a>
//       <Icon name='user' />
//       22 Friends
//     </a>
//   </Card.Content>
// </Card>