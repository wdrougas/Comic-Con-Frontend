import React from 'react'


export default class Searchbar extends React.Component {
    render() {
        return (
            <div className='App'>
                <input 
                    className='search'
                    placeholder="Search"
                    onChange={this.props.onSearch}
                />
            </div>
        )
    }
}