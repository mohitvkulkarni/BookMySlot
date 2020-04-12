import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import StatsCard from "../Components/StatsCard";
import SlotList from "../Components/SlotList";

class StoreDashboard extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name={"Store Dashboard"} headerImage = {"shop"} />
          <div className="row">
            <div className="col-6 noSpace">
              <StatsCard header={"Customers Visited Today"} value={"256"} />
            </div>
            <div className="col-6 noSpace">
              <StatsCard header={"Customers Expected Today"} value={"512"} />
            </div>
          </div>
          <hr />
          <div>
            <h3 style={{ color: "#333d79ff" }}>
              <b>TODAY'S SLOTS</b>
            </h3>
            <div className="slotListDiv">
              <SlotList slotText="10/15" slotTime="9.00 am - 10.00 am" />
              <SlotList slotText="8/15" slotTime="10.00 am - 11.00 am" />
              <SlotList slotText="12/15" slotTime="11.00 am - 12.00 pm" />
              <SlotList slotText="4/15" slotTime="12.00 pm - 1.00 pm" />
            </div>
          </div>
          <Link to={"/StoreConfigureSlots"}>
            <Button
              label={`Configure Slots`}
              color={"#333d79ff"}
              className="loginButton"
            />
          </Link>
        </Layout>
      </div>
    );
  }
}

export default StoreDashboard;
