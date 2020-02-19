
import React from 'react'
import { Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format'


const MovieCardDetails = (props) => {
    return (
        <div className = 'ui two column centered grid'>
    <Container>
      <img src={props.movieDetails.image_url} wrapped="false" />
      
        <h2>{props.movieDetails.name}</h2>
        <h3>
          Rating: 
          <span> {props.movieDetails.rating}</span>
        </h3>
        <h3>
          Budget:
          <NumberFormat value={props.movieDetails.budget} displayType={'text'} thousandSeparator={true} prefix={' $'} />
        </h3>
        <h3>
          Box Office Revenue: 
          <NumberFormat value={props.movieDetails.box_office_revenue} displayType={'text'} thousandSeparator={true} prefix={' $'} />
        </h3>
        <p>
          Description: 
          <span> {props.movieDetails.description} </span>
        </p>
      <div className="ui vertical animated button" tabIndex="0">
      <div className="hidden content"
      onClick={() => props.addFavorites(props.movieDetails)}>Add to Favorites</div>
      <div className="visible content">
      <i className="star icon"></i>
      </div>
      </div>
      <div className="ui vertical animated button" tabIndex="0">
      {<Link to={`/`}>
      <div className="hidden content">Go Back</div>
      <div className="visible content">
      <i className="film icon"></i>
      </div>
      </Link>}
      </div>
      <div className="ui vertical animated button" tabIndex="0">
      <div className="hidden content"
      onClick={() => props.removeFromFavorites(props.favorites.find(favorite => favorite.movie_id === props.movieDetails.id))}>Remove from Favorites</div>
      <div className="visible content">
      <i className="trash icon"></i>
      </div>
      </div>
    </Container> 
    </div>
    )



}
export default MovieCardDetails 