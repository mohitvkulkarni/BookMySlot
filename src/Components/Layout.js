import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="layout col-lg-5 col-md-6 col-sm-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;