import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home wrapper-v">
        <h2 className="page-title">Home</h2>
        <img src="https://placekitten.com/500/600" alt="placeholder kitten"/>

        <Link to='/resources'>Show me the cats!</Link>
      </div>
    );
  }

}