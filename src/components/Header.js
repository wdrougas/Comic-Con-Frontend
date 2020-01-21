import React from 'react'
import Searchbar from './Searchbar'
import {Image} from 'semantic-ui-react'



export default class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='ui header'>
                <div className='App'>
                <h1>ComicCon</h1>
        {this.props.user ? <Image circular src={this.props.user.profile_photo}/> : null}
                </div>
            </div>
        )
    }
}