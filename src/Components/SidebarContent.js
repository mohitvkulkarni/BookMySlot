import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class SidebarContent extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: "80px",
            backgroundColor: "#333d79ff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ padding: "20px", color: "white" }}>Menu</h3>
        </div>
        <br />
        <Link to={"/"}>
        <span style={{ margin: "15px" }}>User Profile</span>
        </Link>
        <br />
        <hr />
        <Link to={"/"}>
          <span style={{ margin: "50px" }}>Logout</span>
        </Link>
        <hr />
      </div>
    );
  }
}

export default SidebarContent;
