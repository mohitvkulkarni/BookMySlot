import React, { Component } from "react";
import booking from "../assets/images/booking.png";
import hamIcon from "../assets/images/hamIcon.png";
// import customer from "../assets/images/customer.png";
// import shop from "../assets/images/shop.png";
// import supermarket from "../assets/images/booking.png";
// import doctor from "../assets/images/doctor.png";
import Sidebar from "react-sidebar";
import SidebarContent from "./SidebarContent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      rootClass: {
        top: 20,
        height: 35,
      },
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    console.log(open);
    this.setState({ sidebarOpen: open });
    if (open) {
      this.setState({
        rootClass: {
          height: "90vh",
          width: 400,
        },
      });
    } else {
      this.setState({
        rootClass: {
          top: 15,
        },
      });
    }
  }

  render() {
    return (
      <div>
        {!this.props.name ? (
          <div
            className="col-12 header"
            style={{ textAlign: "center", display: "flex", margin: 0 }}
          >
            <div className="zefi col-12">
              <img alt="" src={booking} className="headerLogo" />
              BOOKMYSLOT
            </div>
          </div>
        ) : (
          <div className="row" style={{ padding: 0 }}>
            <div className="col-2 header" style={{ margin: 0 }}>
              <Sidebar
                sidebar={<SidebarContent />}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{
                  sidebar: { background: "white" },
                  root: this.state.rootClass,
                }}
              >
                <button
                  onClick={() => this.onSetSidebarOpen(true)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <img alt="" src={hamIcon} style={{ height: 30 }} />
                </button>
              </Sidebar>
            </div>
            <div
              className="col-10 header"
              style={{ textAlign: "center", display: "flex", margin: 0 }}
            >
              <div className="zefi col-12">
                <img
                  alt=""
                  src={require("../assets/images/" +
                    this.props.headerImage +
                    ".png")}
                  className="headerLogo"
                />
                {this.props.name}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
