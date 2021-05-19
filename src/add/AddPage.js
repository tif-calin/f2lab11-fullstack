import { Component } from 'react';
import { addCat, getCat, getCats, updateCat } from '../utils/famous-cats-api.js';
import './AddPage.css';

export default class AddPage extends Component {
  state = {
    id: 0,
    name: '',
    type: '',
    url: '',
    year: 0,
    lives: 9,
    isSidekick: false,
    allTypes: [],
    cat: null
  };

  async componentDidMount() {
    try {
      const objState = {};

      // get list of types of cats
      objState.allTypes = [];
      (await getCats()).forEach(cat => {
        if (!objState.allTypes.includes(cat.type)) objState.allTypes.push(cat.type);
      });

      // if cat passed as a prop, add
      if (this.props.match.params.id) this.setState(await getCat(Number(this.props.match.params.id)));

      // save state
      this.setState(objState);
    }
    catch (err) {
      console.log(err);
      this.props.history.push('/');
    }
  }

  onSubmit = async e => {
    e.preventDefault();
    if (!this.state.id) {
      await addCat(this.state);
      this.props.history.push('/cats/');
    } else {
      await updateCat(this.state);
      this.props.history.push('/cats/');
    }
  }

  onChange = e => {
    console.log(e.target.value);
    const obj = {};
    switch (e.target.type) {
      case ('number'):
        obj[e.target.name] = Number(e.target.value);
        this.setState(obj);
        break;
      case ('checkbox'):
        obj[e.target.name] = e.target.checked;
        this.setState(obj);
        break;
      case ('text'):
      default:
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }
  }

  render() {
    const cat = this.state;
    return (
      <form onSubmit={this.onSubmit} className="AddPage wrapper-v">
        <h2 className="page-title">{(this.state.id) ? 'Edit' : 'Add'} a cat</h2>
        <fieldset>
          <label>
            name:
            <input onChange={this.onChange} name="name" type="text" defaultValue={cat.name} required/>
          </label>
          <label>
            type:
            <select onChange={this.onChange} name="type" defaultValue={cat.type}>
              {this.state.allTypes.map(type => <option value={type}>{type}</option>)}
            </select>
          </label>
          <label>
            image:
            <input onChange={this.onChange} name="url" type="text" defaultValue={cat.url} required/>
          </label>
          <label>
            year:
            <input onChange={this.onChange} name="year" defaultValue={cat.year} type="number"/>
          </label>
          <label>
            lives:
            <input onChange={this.onChange} name="lives" type="number" min="0" max="9" defaultValue={cat.lives}/>
          </label>
          <label>
            sidekick?:
            <input onChange={this.onChange} name="isSidekick" type="checkbox" defaultChecked={cat.isSidekick}/>
          </label>
        </fieldset>
        <button type="submit">{(this.state.id) ? 'Edit' : 'Add'} Cat</button>
      </form>
    );
  }

};