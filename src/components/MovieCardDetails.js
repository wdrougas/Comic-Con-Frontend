
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const MovieCardDetails = (props) => {
    return (
        <div className = 'ui two column centered grid'>
    <Card>
      <Image src={props.movieDetails.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.movieDetails.name}</Card.Header>
        <Card.Meta>
          Rating: 
          <span> {props.movieDetails.rating}</span>
        </Card.Meta>
        <Card.Meta>
          Budget: 
          <span> {props.movieDetails.budget}</span>
        </Card.Meta>
        <Card.Meta>
          Box Office Revenue: 
          <span> {props.movieDetails.box_office_revenue}</span>
        </Card.Meta>
        <Card.Meta>
          Description: 
          <span> {props.movieDetails.description}</span>
        </Card.Meta>
      </Card.Content>
      <div className="ui vertical animated button" tabIndex="0">
      <div className="hidden content">Add to Favorites</div>
      <div className="visible content">
      <i className="star icon"></i>
      </div>
      </div>
      <div className="ui vertical animated button" tabIndex="0">
      <div onClick={props.resetMovieDetailState}className="hidden content">Go Back</div>
      <div className="visible content">
      <i className="film icon"></i>
      </div>
      </div>

    </Card> 
    </div>
    )



}
export default MovieCardDetails 