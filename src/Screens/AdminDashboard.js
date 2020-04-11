import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import StatsCard from "../Components/StatsCard";
import Searchbar from "../Components/Searchbar";

class AdminDashboard extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name="Admin Dashboard" />
          <div className="row horizontalSlotRow" style={{ overflow: "auto" }}>
            <div className="horizontalSlotList">
              <div className="col-6">
                <StatsCard header={"Visitors Out Right Now"} value={"1256"} />
              </div>
              <div className="col-6">
                <StatsCard header={"Stores Open Right Now"} value={"52"} />
              </div>
              <div className="col-6">
                <StatsCard header={"Visitors expected today"} value={"3456"} />
              </div>
              <div className="col-6">
                <StatsCard
                  header={"Last Visitor Slot Today"}
                  value={"8.30 - 9.00"}
                />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ padding: 10, justifyContent: "center" }}
          >
            <Searchbar />
          </div>
          <div className="row">
            <div className="col-6 noSpace">
              <button
                className="btnTransaction"
                style={{
                  float: "right",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: "#d3d3d3",
                }}
                type="button"
              >
                Store
              </button>
            </div>
            <div className="col-6 noSpace">
              <button
                className="btnTransaction"
                style={{
                  float: "left",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                type="button"
              >
                Consumer
              </button>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default AdminDashboard;
