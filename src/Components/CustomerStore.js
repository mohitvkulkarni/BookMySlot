import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class CustomerStore extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-11 row slotContainerDiv">
            <div className="col-3 centerDiv">
              <img src={this.props.img} alt="" style={{ height: 50 }} />
            </div>
            <div className="col-9">
              <h4 className="slotListHeader">Name: {this.props.name}</h4>
              <h5 className="slotListValue">Address: {this.props.address}</h5>
              <h5 className="slotListValue">Type: {this.props.type}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerStore;
