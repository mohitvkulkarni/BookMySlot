import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import calendar from "../assets/images/calendar.png";

class PeopleRiskList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-11 row slotContainerDiv">
            <div className="col-3 centerDiv">
              <img src={calendar} alt="" style={{ height: 40 }} />
            </div>
            <div className="col-9">
              <h6 className="slotListText">Name: {this.props.name}</h6>
              <h6 className="slotListText">Store Meet: {this.props.meet}</h6>
              <h6 className="slotListText">Date/Time: {this.props.dateTime}</h6>
              <h6 className="slotListText">Address: {this.props.address}</h6>
              <h6 className="slotListText">ID: {this.props.id}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleRiskList;
