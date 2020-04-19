import React from 'react';
import { Link } from "@reach/router";

class Home extends React.Component {

  constructor() {
    super();
  }

  render () {
    const { user } = this.props;
    return (
      
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-4">
           <h2> Meeting Log Application </h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           
             {user && (
              <React.Fragment>
                <Link className="btn btn-success" to="/meetings" role="button">Meetings</Link>
               </React.Fragment>
              )}

             {!user && (
              <React.Fragment>
                <Link className="btn btn-primary mr-2" to="/register" role="button">Register</Link>
                <Link className="btn btn-secondary mr-2" to="login" role="button">Login</Link>
              </React.Fragment>
              )
             }

          </div>
        </div>        
      </div>
    );
  }

}

export default Home;
