import React from 'react'
import Searchbar from './Searchbar'
import {Image} from 'semantic-ui-react'



export default class Header extends React.Component {
    render() {
        return (
            <div className='ui header'>
                <div className='App'>
                <h1>ComicCon</h1>
                </div>
                <div className='Photo'>
                    {this.props.user ? <Image circular src={this.props.user.profile_photo} avatar/> : null}
                </div>
            </div>
        )
    }
}