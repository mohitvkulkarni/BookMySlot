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
  state = {
    account: null,
    balance: "",
    userInfo: {},
    buildEnv: CONSTANTS.BuildEnvTorus,
    isLoading: false,
    isSignUp: false,
  };

  componentDidMount() {
    const isTorus = sessionStorage.getItem("pageUsingTorus");
    if (isTorus) {
      this.setState({ isLoading: true });
      web3Obj.initialize(isTorus).then(() => {
        this.setStateInfo();
      });
    }
  }

  getUserInfo = async () => {
    const userInfo = await web3Obj.torus.getUserInfo();
    this.setState({ userInfo: userInfo, isLoading: false });
    UserService.setUserInfo({ ...this.state });
    this.props.history.push("/Dashboard");
  };

  setStateInfo = () => {
    web3Obj.web3.eth.getAccounts().then((accounts) => {
      this.setState({ account: accounts[0] });
      EthScanService.getBalance(accounts[0]).then((balance) => {
        this.setState({ balance: balance });
        this.getUserInfo();
      });
    });
  };

  enableTorus = async (e) => {
    this.setState({ isLoading: true });
    const { buildEnv } = this.state;
    e.preventDefault();
    try {
      await web3Obj.initialize(buildEnv);
      this.setStateInfo();
    } catch (error) {
      this.setState({ isLoading: false });
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <Layout>
          <Header />
          <div>
            {this.state.isSignUp ? <SignUpBasic /> : <LoginComponent />}
            {!this.state.isSignUp ? (
              <div>
                {this.state.isLoading && <IsLoading />}
                <Button
                  label={`Login`}
                  onClick={this.enableTorus}
                  color={"#5669F0"}
                  className="loginButton"
                />
                <div style={{ margin: 10 }}>
                  <span style={{ color: "#1f1e2f" }}>
                    Not registered?{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "#b9c0e7",
                        cursor: "pointer",
                      }}
                      onClick={() => this.setState({ isSignUp: true })}
                    >
                      Sign Up
                    </span>
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {this.state.isLoading && <IsLoading />}
                <Button
                  label={`Sign Up`}
                  onClick={this.enableTorus}
                  color={"#5669F0"}
                  className="loginButton"
                />
                <div style={{ margin: 10 }}>
                  <span style={{ color: "#1f1e2f" }}>
                    Already registered?{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "#b9c0e7",
                        cursor: "pointer",
                      }}
                      onClick={() => this.setState({ isSignUp: false })}
                    >
                      Login
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Login;
