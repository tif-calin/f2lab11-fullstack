import { Component } from 'react';
import './CatItem.css';

export default class CatItem extends Component {

  render() {
    const cat = this.props.data;

    return (
      <li className="CatItem wrapper-v">
        <h3>{cat.name}</h3>
        <img src={`..${cat.url}`} alt={cat.name}/>
      </li>
    );
  }

};