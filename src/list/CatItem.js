import { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatItem.css';

export default class CatItem extends Component {

  render() {
    const cat = this.props.data;

    return (
      <li className="CatItem">
        <Link className="wrapper-v" to={`/cats/${cat.id}`}>
          <h3>{cat.name}</h3>
          <img src={((cat.url.substring(0, 4) === 'http') ? '' : '..') + cat.url} alt={cat.name}/>
        </Link>
      </li>
    );
  }

};