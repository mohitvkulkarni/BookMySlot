import React, { Component } from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Button from "../Components/Button";

class RegisterConsumer extends Component {
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
          <Header />
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
                Address
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
                Govt. Id No.
              </label>
              <input
                id="govtId"
                type="text"
                value={this.state.amount}
                className="textInput"
              />
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

export default RegisterConsumer;
