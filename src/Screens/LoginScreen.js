import React, { Component } from "react";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Header from "../Components/Header";
import IsLoading from "../Components/IsLoading";

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
      isInvalid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentDidMount() {}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      mailId: value,
    });
  }

  handlePasswordChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      password: value,
    });
  }

  handleLogin = () => {
    if (
      this.state.mailId === "admin@xyz.com" &&
      this.state.password === "admin@123"
    ) {
      this.props.history.push("/AdminDashboard");
    } else if (
      this.state.mailId === "customer@xyz.com" &&
      this.state.password === "customer@123"
    ) {
      this.props.history.push("/CustomerDashboard");
    } else if (
      this.state.mailId === "store@xyz.com" &&
      this.state.password === "store@123"
    ) {
      this.props.history.push("/StoreDashboard");
    } else {
      this.setState({ isInValid: true });
    }
  };

  render() {
    return (
      <div>
        <Layout>
          <Header />
          <div>
            <div
              className="row"
              style={{ marginTop: "2rem", textAlign: "initial" }}
            >
              {/* <div className="centerDivs">
                <img src={enter} alt="" height={150} style={{ margin: 10 }} />
              </div> */}
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
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
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <label className="labelLogin" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="textInput"
                />
              </div>
            </div>
            {this.state.isInValid ? (
              <div>
                <span style={{ color: "red" }}>
                  Please enter valid credentials.
                </span>
              </div>
            ) : null}
            <div style={{ marginTop: "5rem" }}>
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
              <br />
              <div
                style={{
                  marginLeft: 20,
                  borderColor: "#333d79ff",
                  marginRight: 20,
                  borderWidth: 1,
                  padding: 10,
                  fontSize: 12,
                  borderStyle: "solid",
                  textAlign: "left",
                }}
              >
                <span>Use following credentials to login</span>
                <br />
                <span>1.Email: customer@xyz.com - Password: customer@123</span>
                <br />
                <span>2.Email: store@xyz.com - Password: store@123</span>
                <br />
                <span>3.Email: admin@xyz.com - Password: admin@123</span>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default LoginScreen;
