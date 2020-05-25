import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    // event.target.value : lay value tai noi goi ham handleChange
    this.setState({
      // event.target.name : property
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    if (this.state.username === "anhduy" && this.state.password === "123456") {
      alert("Login successful, Hello " + this.state.username);
    } else {
      alert("Username or Password is wrong");
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tr>
            <td>
              <label>Username </label>
            </td>
            <td>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password </label>
            </td>
            <td>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="submit" value="Login" />
            </td>
          </tr>
        </table>
      </form>
    );
  }
}

export default Form;
