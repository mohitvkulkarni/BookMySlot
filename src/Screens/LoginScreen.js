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

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginList: [
        { email: "admin@xyz.com", password: "admin123", userType: "admin" },
        {
          email: "customer@xyz.com",
          password: "customer123",
          userType: "customer",
        },
        { email: "store@xyz.com", password: "store123", userType: "store" },
      ],
      isLoading: false,
      mailId: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentDidMount() {}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      mailId: value,
    });
  }

  handlePasswordChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      password: value,
    });
  }

  handleLogin = () => {
    if (this.state.mailId == "admin@xyz.com") {
      this.props.history.push("/AdminDashboard");
    } else if (this.state.mailId == "customer@xyz.com") {
      this.props.history.push("/CustomerDashboard");
    } else {
      this.props.history.push("/StoreDashboard");
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
                <label className="labelLogin" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="textInput"
                />
              </div>
            </div>

            <div>
              {this.state.isLoading && <IsLoading />}
              <Button
                label={`Login`}
                onClick={this.handleLogin}
                color={"#333d79ff"}
                className="loginButton"
              />
              <div style={{ margin: 10 }}>
                <span style={{ color: "#333d79ff" }}>
                  Not registered?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#b9c0e7",
                      cursor: "pointer",
                    }}
                    onClick={() => this.props.history.push("/SignUpScreen")}
                  >
                    Sign Up
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

export default LoginScreen;
