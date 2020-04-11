import React, { Component } from "react";
import booking from "../assets/images/booking.png";
import BackButton from "./BackButton";

class Header extends Component {
  render() {
    return (
      <div className="row" style={{ padding: 0 }}>
        <div
          className="col-12 header"
          style={{ textAlign: "center", display: "flex" }}
        >
          {!this.props.name ? (
            <div className="zefi col-12">
              <img alt="" src={booking} className="headerLogo" />
              BOOKMYSLOT
            </div>
          ) : (
            <div
              className="zefi col-12"
              style={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BackButton />
              {this.props.name}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
