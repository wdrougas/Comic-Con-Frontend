
import React from 'react'

const FavoriteButton = (props) => { 

    return (
      <div onClick={props.updateFavorites}>
      <button className="ui icon left labeled button">
        <i aria-hidden="true" className="like icon"></i>
        Show My Favorites
      </button>
     </div> 
     
    )
}

export default FavoriteButton  