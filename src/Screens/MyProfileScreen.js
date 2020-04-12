import React, { Component } from "react";
import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Header from "../Components/Header";
import IsLoading from "../Components/IsLoading";

class MyProfileScreen extends Component {
  
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
                  value="John"
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
                  value="Doe"
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
