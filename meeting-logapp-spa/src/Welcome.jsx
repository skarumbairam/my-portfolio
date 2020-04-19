import React from 'react';

class Welcome extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { userName } = this.props;
    return (
      <div className="container">
        <div className="pt-4">
            <h3> Welcome { userName } ! </h3>
        </div>
      </div>
    );
  }

}

export default Welcome;
