import React, { Component } from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Button from "../Components/Button";

class RegisterStore extends Component {
  state = {
    account: null,
    balance: "",
    userInfo: {},
    isLoading: false,
  };

  handleSubmit = () => {
    console.log("Signup handler");
    console.log(this.state.type);
    this.props.history.push("/RegistrationSuccessful");
  };
  render() {
    return (
      <div>
        <Layout>
          <Header></Header>
          <div style={{ marginTop: "2rem", textAlign: "initial" }}>
            <div
              className="col-12 row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
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
            <div
              className="col-12 row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <label className="labelLogin" htmlFor="address">
                Store Address
              </label>
              <input
                id="address"
                type="text"
                value={this.state.amount}
                className="textInput"
              />
            </div>
            <div
              className="col-12 row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <label className="labelLogin" htmlFor="govtId">
                Store GST No.
              </label>
              <input
                id="govtId"
                type="text"
                value={this.state.amount}
                className="textInput"
              />
            </div>
            <div
              className="col-12 row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
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
            <Button
              label={`Sign Up`}
              color={"#333d79ff"}
              onClick={this.handleSubmit}
              className="loginButton"
            />
          </div>
        </Layout>
      </div>
    );
  }
}

export default RegisterStore;
