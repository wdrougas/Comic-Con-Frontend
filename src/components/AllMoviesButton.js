import React from 'react'
import {Link} from 'react-router-dom'


const AllMoviesButton = (props) => {
    return (
        <div onClick={props.updateFavorites}>
          <Link to={`/`}>
        <button className="ui icon left labeled button" onClick={() => props.handleClick(props.user)}>
          <i aria-hidden="true" className="film icon"></i>
          Return to Home
        </button>
        </Link>
       </div> 
       
      )
}


export default AllMoviesButton