import React, { Component } from "react";
import booking from "../assets/images/booking.png";

class Header extends Component {
  render() {
    return (
      <div className="row" style={{ padding: 0 }}>
        <div
          className="col-12 header"
          style={{ textAlign: "center", display: "flex" }}
        >
          <div className="zefi col-12">
            <img alt="" src={booking} className="headerLogo" />
            BOOKMYSLOT
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
