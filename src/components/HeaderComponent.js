import React from 'react'
import {Segment, Image, Header} from 'semantic-ui-react'



export default class HeaderComponent extends React.Component {
    render() {
        return (
                <Segment clearing>
                <Header as='h1' floated='left' >ComicCon</Header>
                <Header as='h4' floated='right'>
                    {this.props.user ? <Image circular src={this.props.user.profile_photo} avatar/> : null}
                </Header>
                </Segment>
            
        )
    }
}