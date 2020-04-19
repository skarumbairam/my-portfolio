import React, {Component} from 'react';
import { Router, navigate } from "@reach/router";
import firebase from "./Firebase";

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
      userName: null,
      userId: null,
    }

    this.registerUser = this.registerUser.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  componentDidMount () {

    const thisRef = this;
    firebase.auth().onAuthStateChanged(function(FBUser) {

      if (FBUser) {
        // User is signed in.
        const displayName = FBUser.displayName;
        thisRef.setState({
          userName: displayName,
          user: FBUser,
          userId: FBUser.uid
        });
        // ...
      } else {
        console.log("User Logged Out");
      }

    });

  }

  // Logout User 

  userLogout (e) {

     this.setState({
        user: null,
        displayName: null,
        userId: null
      });

    firebase.auth().signOut()

    .then(function() {
      // Sign-out successful.
      navigate('/login');

    })
    .catch(function(error) {
      // An error happened
    });
    
  }

  registerUser = (userName) => {

    const FBUser = firebase.auth().currentUser;

    const thisRef = this;


    FBUser.updateProfile({
      displayName: userName,
    }).then( () => {

       thisRef.setState({
        user: FBUser,
        userName: userName,
        userId: FBUser.uid
      });

       navigate('/meetings');

    });

    
  }

// {<Navigation user={user} userLogout={this.userLogout} />}

  render () {

    const { user } = this.state;

    return (
        <div> 
            <Navigation user={user} userLogout={this.userLogout} />
            { 
              user && (<Welcome userName={this.state.userName} />)
            }
           <Router>
             <Home path='/' user={user} />
             <Register path='/register' registerUser={this.registerUser} />
             <Login path='/login' />
             <Meetings path='/meetings'/>
           </Router>  
        </div>
    );
  }

}

export default App;
