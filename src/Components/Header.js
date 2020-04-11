import React, { Component } from "react";
import booking from "../assets/images/booking.png";
import customer from "../assets/images/customer.png";
import shop from "../assets/images/shop.png";
import supermarket from "../assets/images/booking.png";
import doctor from "../assets/images/doctor.png";

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
            >
              <img alt="" src={this.props.headerImage} className="headerLogo" />
              {this.props.name}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
