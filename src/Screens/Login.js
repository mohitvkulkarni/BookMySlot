import React, { Component } from "react";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Header from "../Components/Header";
import IsLoading from "../Components/IsLoading";
import web3Obj from "../utils";
import UserService from "../Services/UserService";
import CONSTANTS from "../constants";
import EthScanService from "../Services/EthScanService";

class Login extends Component {
  state = {
    account: null,
    balance: "",
    userInfo: {},
    buildEnv: CONSTANTS.BuildEnvTorus,
    isLoading: false,
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
          <Button
            label={`Login`}
            onClick={this.enableTorus}
            color={"#5669F0"}
            className="loginButton"
          />
          {this.state.isLoading && <IsLoading />}
        </Layout>
      </div>
    );
  }
}

export default Login;
