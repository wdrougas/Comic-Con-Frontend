import React from 'react'
import {Segment, Image, Header, Button} from 'semantic-ui-react'



export default class HeaderComponent extends React.Component {
    render() {
        return (
                <Segment clearing>
                <Header as='h1' floated='left' >ComicCon</Header>
                <Header as='h4' floated='right'>
                    {this.props.user ? <Image circular src={this.props.user.profile_photo} avatar/> : null}
                </Header>
                {this.props.user ? <Button floated='right' onClick={this.props.handleClick}>Logout</Button>: null}
                </Segment>
            
        )
    }
}