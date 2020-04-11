import React, { Component } from "react";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Header from "../Components/Header";
import IsLoading from "../Components/IsLoading";
import SignUpBasic from "../Components/SignUpBasic";
import LoginComponent from "../Components/LoginComponent";

class Login extends Component {
  state = {
    loginList: [
      {
        email: "admin@xyz.com",
        password: "admin123",
        userType: "admin",
      },
      {
        email: "customer@xyz.com",
        password: "customer123",
        userType: "customer",
      },
      {
        email: "store@xyz.com",
        password: "store123",
        userType: "store",
      },
    ],
    isLoading: false,
    isSignUp: false,
  };

  componentDidMount() {}

  getUserInfo = async () => {};

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
                  color={"#333d79ff"}
                  onClick={this.handleLogin}
                  className="loginButton"
                />
                <div style={{ margin: 10 }}>
                  <span style={{ color: "#1b1e23" }}>
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
                  color={"#333d79ff"}
                  className="loginButton"
                />
                <div style={{ margin: 10 }}>
                  <span style={{ color: "#1b1e23" }}>
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
