import { Component } from 'react';
import AddPage from '../add/AddPage';
import './EditPage.css';

class EditPage extends Component {
  
  render() {

    return (
      <div className="EditPage">        
        <AddPage {...this.props}/>
      </div>
    );

  }
}
 
export default EditPage;