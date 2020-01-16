import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const MovieCard = (props) => (
    <div class = "four wide column">

    <Card>
      <Image src={props.movie.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.movie.name}</Card.Header>
        <Card.Meta>
          Rating: 
          <span> {props.movie.rating}</span>
        </Card.Meta>
      </Card.Content>
      <div class="ui vertical animated button" tabindex="0">
      <div class="hidden content">Add</div>
      <div class="visible content">
      <i class="film icon"></i>
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