import React, {Component} from 'react';

class Welcome extends React.Component {

  constructor () {
    super();
  }

  render () {
    const { user } = this.props;
    return (
      <div className="container">
        <div className="pt-4">
            <h3> Welcome { user} ! </h3>
        </div>
      </div>
    );
  }

}

export default Welcome;
