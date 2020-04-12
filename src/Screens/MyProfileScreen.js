import React, { Component } from "react";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Header from "../Components/Header";
import IsLoading from "../Components/IsLoading";

class MyProfileScreen extends Component {
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
    if (this.state.mailId === "admin@xyz.com") {
      this.props.history.push("/AdminDashboard");
    } else if (this.state.mailId === "customer@xyz.com") {
      this.props.history.push("/CustomerDashboard");
    } else {
      this.props.history.push("/StoreDashboard");
    }
  };

  render() {
    return (
      <div>
        <Layout>
          <Header name="My Profile" headerImage="user" />
          <div>
            <div className = "col-8" style= {{display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px"}}>
              <img style= {{height: "auto", width: "40%"}}
                alt=""
                src={require("../assets/images/user.png")}
              />
            </div>
            <hr/>
            <div >
            <label className="labelLogin" htmlFor="mail">
                  First Name
                </label>
                <input
                  id="mailId"
                  type="text"
                  name="mailId"
                  value="Mohit"
                  className="textInput"
                />
            </div>
            <div >
            <label className="labelLogin" htmlFor="mail">
                  Last Name
                </label>
                <input
                  id="mailId"
                  type="text"
                  name="mailId"
                  value="Kulkarni"
                  className="textInput"
                />
            </div>
            <div>
            <label className="labelLogin" htmlFor="mail">
                   Contact#
                </label>
                <input
                  id="mailId"
                  type="text"
                  name="mailId"
                  value="0987654321"
                  className="textInput"
                />
            </div>
            <div>
            <label className="labelLogin" htmlFor="mail">
                  Email
                </label>
                <input
                  id="mailId"
                  type="text"
                  name="mailId"
                  value="admin@xyz.com"
                  className="textInput"
                />
            </div>
            <div>
            <label className="labelLogin" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value= "admin@123"
                  className="textInput"
                />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default MyProfileScreen;
