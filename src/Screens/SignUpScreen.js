import React, { Component } from "react";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Header from "../Components/Header";
import IsLoading from "../Components/IsLoading";
import web3Obj from "../utils";
import UserService from "../Services/UserService";
import CONSTANTS from "../constants";
import EthScanService from "../Services/EthScanService";
import SignUpBasic from "../Components/SignUpBasic";
import LoginComponent from "../Components/LoginComponent";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isSignUp: false,
      mailId: "",
      password: "",
      name: "",
      type: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSignUp = () => {
    console.log("Signup handler");
    console.log(this.state.type);

    if (this.state.type === "store") {
      this.props.history.push("/RegisterStore");
    } else if (this.state.type === "customer") {
      this.props.history.push("/RegisterConsumer");
    } else {
      this.props.history.push("/RegisterConsumer");
    }
  };

  render() {
    return (
      <div>
        <Layout>
          <Header />
          <div>
            <div style={{ marginTop: "2rem", textAlign: "initial" }}>
              <div className="col-12">
                <label className="labelLogin" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
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
                  name="mailId"
                  value={this.state.mailId}
                  onChange={this.handleInputChange}
                  className="textInput"
                />
              </div>
              <div className="col-12">
                <label className="labelLogin" htmlFor="type">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={this.state.type}
                  className="textInput"
                  onChange={this.handleInputChange}
                >
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
                  name="password"
                  value={this.state.password}
                  className="textInput"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div>
              {this.state.isLoading && <IsLoading />}
              <Button
                label={`Sign Up`}
                onClick={this.handleSignUp}
                color={"#333d79ff"}
                className="loginButton"
              />
              <div style={{ margin: 10 }}>
                <span style={{ color: "#333d79ff" }}>
                  Already registered?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#b9c0e7",
                      cursor: "pointer",
                    }}
                    onClick={() => this.props.history.push("/")}
                  >
                    Login
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Login;
