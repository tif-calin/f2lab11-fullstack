import { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatList.css';

export default class CatList extends Component {

  async componentDidMount() {
    
  }

  render() {
    return (
      <div className="CatList">
        <ul>

        </ul>

        <Link to='/'>&#9664; back</Link>
      </div>
    );
  }

};