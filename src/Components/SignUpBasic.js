import React, { Component } from "react";
import CONSTANTS from "../constants";

class SignUpBasic extends Component {
  state = {
    account: null,
    balance: "",
    userInfo: {},
    buildEnv: CONSTANTS.BuildEnvTorus,
    isLoading: false,
  };

  render() {
    return (
      <div style={{ marginTop: "2rem", textAlign: "initial" }}>
        <div className="col-12">
          <label className="labelLogin" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={this.state.amount}
            className="textInput"
          />
        </div>
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
          <label className="labelLogin" htmlFor="type">
            Type
          </label>
          <select id="type" value={this.state.amount} className="textInput">
            <option value=""></option>
            <option value="admin">Police/Admin</option>
            <option value="store">Store</option>
            <option value="consumer">Consumer</option>
          </select>
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

export default SignUpBasic;
