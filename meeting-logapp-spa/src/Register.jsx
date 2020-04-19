import React from 'react';
import firebase from "./Firebase";

class Register extends React.Component {

  constructor (props) {
  	super(props);
  	this.state = {
  		name: '',
  		email: '',
  		passwordOne: '',
  		passwordTwo: '',
  	}
  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

  	const item = e.target.id;
  	const itemValue = e.target.value;

  	this.setState({[item] : itemValue}, ()=> { 
		if(this.state.passwordOne !== this.state.passwordTwo){
			this.setState({
				errorMsg: "Password is not matching"
			})
		}else{
			this.setState({
				errorMsg: null
			})
		}
  	});

  }

  handleSubmit (e) {
  	e.preventDefault();

  	const tempInfo = {
  		email: this.state.email,
  		dispalyName: this.state.name,
  		password: this.state.passwordOne
  	}

  	firebase
  	.auth()
  	.createUserWithEmailAndPassword(tempInfo.email, tempInfo.password)
  	.then( ()=>{
  		this.props.registerUser(tempInfo.dispalyName);
  	})
  	.catch(error => {
  		console.log(error.message);
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

        <form className="justify-content-md-center mt-3 col-4 ml-auto" onSubmit={this.handleSubmit}>

        { (this.state.errorMsg && this.state.errorMsg !== null) ? 
        	<div className="alert alert-primary" role="alert">
			  {this.state.errorMsg}
			</div> : null 
		}

          <div className="form-group">
		    <label htmlFor="displayname">Display name</label>
		    <input value={this.state.name} onChange={this.handleChange} type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" />
		  </div>

		  <div className="form-group">
		    <label htmlFor="email">Email address</label>
		    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" />
		  </div>

		  <div className="form-group">
		    <label htmlFor="passwordOne">Password</label>
		    <input value={this.state.passwordOne} onChange={this.handleChange} type="password" className="form-control" id="passwordOne" placeholder="Password" />
		  </div>

		  <div className="form-group">
		    <label htmlFor="passwordTwo">Confirm password</label>
		    <input value={this.state.passwordTwo} onChange={this.handleChange} type="password" className="form-control" id="passwordTwo" placeholder="Confirm password" />
		  </div>
		  
		  <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Submit</button>
		</form>   
      </div>
    );
  }

}

export default Register;
