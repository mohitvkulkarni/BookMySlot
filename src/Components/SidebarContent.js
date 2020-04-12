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
        <span style={{ padding: "15px", marginTop: "30px" }}>User Profile</span>
        <br />
        <hr />
        <Link to={"/"}>
          <span style={{ padding: "50px" }}>Logout</span>
        </Link>
        <hr />
      </div>
    );
  }
}

export default SidebarContent;
