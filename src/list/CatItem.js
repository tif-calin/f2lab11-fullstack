import { Component } from 'react';
import './CatItem.css';

export default class CatItem extends Component {

  render() {
    const cat = this.props.data;

    return (
      <li className="CatItem">
        <h3>{cat.name}</h3>
      </li>
    );
  }

};