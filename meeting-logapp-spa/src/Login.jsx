import React from 'react';
import { navigate } from "@reach/router";
import firebase from "./Firebase";


class Login extends React.Component {

  constructor (props) {
  	super(props);
  	this.state = {
  		email: '',
  		password: '',
  		errorMsg: null
  	}

  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange(e) {
  	const item = e.target.id;
  	const itemValue = e.target.value;
  	this.setState({[item] : itemValue});
  }

  handleSubmit (e) {
  	e.preventDefault();

  	const tempInfo = {
  		email: this.state.email,
  		password: this.state.password
  	}

	firebase
  	.auth()
  	.signInWithEmailAndPassword(tempInfo.email, String(tempInfo.password))
  	.then( ()=>{
  		navigate('/meetings');
  	})
  	.catch(error => {
		if(error.message !== null) {
			this.setState({errorMsg : error.message});
		}else{
			this.setState({errorMsg : null});
		}	
  	})

  }

  render () {
    return (
      <div className="container">

         <form className="justify-content-md-center mt-3 col-4 ml-auto" onSubmit={this.handleSubmit} >
          
          { (this.state.errorMsg && this.state.errorMsg !== null) ? 
	        	<div className="alert alert-primary" role="alert">
				  {this.state.errorMsg}
				</div> : null 
			}

		  <div className="form-group">
		    <label htmlFor="email">Email address</label>
		    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
		  </div>

		  <div className="form-group">
		    <label htmlFor="passwordOne">Password</label>
		    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
		  </div>

		  <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
		</form>   
      </div> 
    );
  }

}

export default Login;
