import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLogin: true });
    alert("Login Successfull");
  }

  handleLogout() {
    this.setState({ isLogin: false });
    alert("Logout Successfull");
  }

  render() {
    let content = null;
    let title = null;

    if (this.state.isLogin) {
      content = <button onClick={() => this.handleLogout()}>Login</button>
    } else {
      content = <button onClick={() => this.handleLogin()}>Logout</button>
    }

    title = this.state.isLogin ? <h1>Logouted out</h1> : <h1>Logined</h1>

    return (
      <div>
        {title}
        {content}
      </div>
    );
  }
}

export default Login;
