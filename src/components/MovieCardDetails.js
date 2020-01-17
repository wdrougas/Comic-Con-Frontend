
import React from 'react'
import { Container, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MovieCardDetails = (props) => {
    return (
        <div className = 'ui two column centered grid'>
    <Container>
      <img src={props.movieDetails.image_url} wrapped ui={false} />
      
        <h2>{props.movieDetails.name}</h2>
        <h3>
          Rating: 
          <span> {props.movieDetails.rating}</span>
        </h3>
        <h3>
          Budget: 
          <span> {props.movieDetails.budget}</span>
        </h3>
        <h3>
          Box Office Revenue: 
          <span> {props.movieDetails.box_office_revenue}</span>
        </h3>
        <p>
          Description: 
          <span> {props.movieDetails.description} </span>
        </p>
      <div className="ui vertical animated button" tabIndex="0">
      <div className="hidden content">Add to Favorites</div>
      <div className="visible content">
      <i className="star icon"></i>
      </div>
      </div>
      <div className="ui vertical animated button" tabIndex="0">
      <Link to={`/`}>
      <div className="hidden content">Go Back</div>
      <div className="visible content">
      <i className="film icon"></i>
      </div>
      </Link>
      </div>

    </Container> 
    </div>
    )



}
export default MovieCardDetails 