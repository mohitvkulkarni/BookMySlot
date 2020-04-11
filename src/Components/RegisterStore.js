import React, { Component } from "react";

class RegisterStore extends Component {
  state = {
    account: null,
    balance: "",
    userInfo: {},
    isLoading: false,
  };

  render() {
    return (
      <div style={{ marginTop: "2rem", textAlign: "initial" }}>
        <div className="col-12">
          <label className="labelLogin" htmlFor="mobile">
            Mobile No
          </label>
          <input
            id="mobile"
            type="text"
            value={this.state.amount}
            className="textInput"
          />
        </div>
        <div className="col-12">
          <label className="labelLogin" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={this.state.amount}
            className="textInput"
          />
        </div>
        <div className="col-12">
          <label className="labelLogin" htmlFor="govtId">
            Id No.
          </label>
          <input
            id="govtId"
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
            <option value="medical">Medical</option>
            <option value="food">Groceries</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    );
  }
}

export default RegisterStore;
