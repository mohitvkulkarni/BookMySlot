import React, { Component } from "react";
import enter from "../assets/images/enter.png";

class LoginComponent extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <div style={{ marginTop: "2rem", textAlign: "initial" }}>
        <img src={enter} alt="" height={100} />
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
