import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCat } from '../utils/famous-cats-api';
import './CatPage.css';

export default class CatPage extends Component {

  state = {
    cat: {}
  }

  async componentDidMount() {
    try {
      this.setState({ cat: (await getCat(this.props.match.params.id)) });
    }
    catch (err) {
      console.log(err);
      window.location = '/';
    }
  }

  render() {
    const cat = this.state.cat;

    return (
      <div className="CatPage">
        <div className="wrapper-v">
          <h2 className="page-title">{cat.name}</h2>
          <img src={cat.url} alt={cat.name}/>
          <label>type: <span>{cat.type}</span></label>
          <label>birth year: <span>{cat.year}</span></label>
          <label>lives left: <span>{cat.lives}</span></label>
          <label>is a sidekick?: <span>{(cat.isSidekick) ? 'Yes' : 'No'}</span></label>
        </div>
        <Link to='/cats'>&#9664; back</Link>
      </div>
    );
  }

};