import React, {Component} from 'react';
import './App.css';
import { Router } from "@reach/router";

import Navigation from './Navigation';
import Home from './Home';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';

class App extends Component {

  constructor () {
    super();
    this.state = {
      user: null,
    }
  }

  render () {
    const { user } = this.state;
    return (
        <div> 
           <Navigation user={this.state.user} />
            { user && 
             (<Welcome user={this.state.user} />)
           }
           <Router>
             <Home path='/' user={this.state.user} />
             <Register path='/register' />
             <Login path='/login' />
             <Meetings path='/meetings' />
           </Router>  
        </div>
    );
  }

}

export default App;
