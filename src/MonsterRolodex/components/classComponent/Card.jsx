import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    const {monster} = this.props;
    const {name,email,id} = monster
    console.log(name, email);
    return (

        <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}
