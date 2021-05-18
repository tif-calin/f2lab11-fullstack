import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import CatList from '../list/CatList';
import CatPage from '../detail/CatPage';

class App extends Component {

  render() {
    return (
      <div className="App wrapper-v">
        <Router>
          <Header/>
          <main className="wrapper-v">

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/cats" exact={true}
                render={routerProps => (
                  <CatList {...routerProps}/>
                )}
              />

              <Route path="/cats/:id"
                render={routerProps => (
                  <CatPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
