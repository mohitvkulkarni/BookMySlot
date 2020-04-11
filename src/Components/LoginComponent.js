import React, { Component } from "react";

class LoginComponent extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <div style={{ marginTop: "2rem", textAlign: "initial" }}>
        <div className="col-12">
          <label className="labelLogin" htmlFor="mail">
            Email
          </label>
          <input
            id="mailId"
            type="text"
            value={this.state.amount}
            className="textInput"
          />
        </div>
        <div className="col-12">
          <label className="labelLogin" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="text"
            value={this.state.amount}
            className="textInput"
          />
        </div>
      </div>
    );
  }
}

export default LoginComponent;
