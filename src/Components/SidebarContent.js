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
          <h2 style={{ padding: "20px", color: "white" }}>Menu</h2>
        </div>
        <br />
        <a style={{ padding: "15px", marginTop: "30px" }}>User Profile</a>
        <br />
        <hr />
        <Link to={"/"}>
          <a style={{ padding: "50px" }}>Logout</a>
        </Link>
        <hr />
      </div>
    );
  }
}

export default SidebarContent;
