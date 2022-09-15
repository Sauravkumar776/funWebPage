import React, { Component } from 'react';
import './SearchBox.scss';

export default class SearchBox extends Component {
  render() {
    return (
     <input 
    className='search-box'
    type="search"
    onChange={this.props.onChangeHandler}
    placeholder="Search..."
     />
    )
  }
}
