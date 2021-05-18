import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header wrapper-h">
        <h1>Famous Cats</h1>
        <nav>
          <Link to="/">home</Link>
          <Link to="/cats/">cats</Link>
        </nav>        
      </header>
    );
  }

}
 
export default Header;