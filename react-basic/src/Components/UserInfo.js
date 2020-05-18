import React from 'react';

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
      </div>
    );
  }
}

export default UserInfo;
