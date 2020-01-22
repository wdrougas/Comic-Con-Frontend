
import React from 'react'
import {Link} from 'react-router-dom'

const FavoriteButton = (props) => { 

    return (
      <div onClick={props.updateFavorites}>
        <Link to={`/favorites/${props.user.id}`}>
      <button className="ui icon left labeled button" onClick={() => props.handleClick(props.user)}>
        <i aria-hidden="true" className="like icon"></i>
        Show My Favorites
      </button>
      </Link>
     </div> 
     
    )
}

export default FavoriteButton  