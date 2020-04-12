import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import TimePickerComponent from "../Components/TimePickerComponent";
import DatePickerComponent from "../Components/DatePickerComponent";

class StoreConfigureSlots extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name="Store Dashboard" headerImage= "shop" />
          <div style={{ paddingTop: 20 }}>
            <h3 style={{ color: "#333d79ff" }}>
              <b>Configure Slots</b>
            </h3>
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <label className="labelLogin" htmlFor="openTime">
                  Date:
                </label>
                <DatePickerComponent />
              </div>
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <label className="labelLogin" htmlFor="openTime">
                  Open Time:
                </label>
                <TimePickerComponent />
              </div>
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <label className="labelLogin" htmlFor="openTime">
                  Close Time:
                </label>
                <TimePickerComponent />
              </div>
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <label className="labelLogin" htmlFor="slotsNo">
                  No. of slots
                </label>
                <input
                  id="slotsNo"
                  type="text"
                  value={this.state.amount}
                  className="textInput"
                />
              </div>
              <div
                className="col-12 row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <label className="labelLogin" htmlFor="slotPeople">
                  No of people in each slot
                </label>
                <input
                  id="slotPeople"
                  type="text"
                  value={this.state.amount}
                  className="textInput"
                />
              </div>
            </div>
            <Link to={"/StoreDashboard"}>
              <Button
                label={`Submit`}
                color={"#333d79ff"}
                className="loginButton"
              />
            </Link>
          </div>
        </Layout>
      </div>
    );
  }
}

export default StoreConfigureSlots;
