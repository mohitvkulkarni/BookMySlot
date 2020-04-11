import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class CustomerStore extends React.Component {
  render() {
    return (
        <div className="container">
        <div className="row align-items-center">
          <div className="col-12 slotContainerDiv">
            <h4 className="slotListHeader">Name: {this.props.name}</h4>
            <h5 className="slotListValue">Address: {this.props.address}</h5>
            <h5 className="slotListValue">Type: {this.props.type}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerStore;
