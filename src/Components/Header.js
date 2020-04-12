import React, { Component } from "react";
import booking from "../assets/images/booking.png";
import customer from "../assets/images/customer.png";
import shop from "../assets/images/shop.png";
import supermarket from "../assets/images/booking.png";
import doctor from "../assets/images/doctor.png";
import Sidebar from "react-sidebar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div>
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
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
              <div className="zefi col-12">
                <img
                  alt=""
                  src={this.props.headerImage}
                  className="headerLogo"
                />
                {this.props.name}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
