import React from 'react'


export default class Searchbar extends React.Component {
    render() {
        return (
            <div className='App'>
                <input 
                    className='search'
                    placeholder="Search ComicCon"
                    onChange={this.props.onSearch}
                />
                <br/>
                <label>Sort By Name:</label>
                <input type='radio' value='name' name='sort' checked={this.props.sort === 'name' ? true : false} onChange={this.props.handleChange}/>
            </div>
        )
    }
}