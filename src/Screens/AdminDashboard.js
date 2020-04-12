import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import StatsCard from "../Components/StatsCard";
import Searchbar from "../Components/Searchbar";
import consumer from "../assets/images/consumer.png";
import store from "../assets/images/store.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

class AdminDashboard extends React.Component {
  state = {
    isColor: {
      store: "#d3d3d3",
      consumer: "",
    },
  };

  getList = (type) => {
    switch (type) {
      case "store":
        this.setState({
          isColor: {
            store: "#d3d3d3",
            consumer: "",
          },
        });
        break;
      case "consumer":
        this.setState({
          isColor: {
            store: "",
            consumer: "#d3d3d3",
          },
        });
        break;
      default:
        break;
    }
  };

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name="Admin Dashboard" headerImage="admin" />
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
                  value={"9.00 PM"}
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
                  backgroundColor: this.state.isColor.store,
                }}
                onClick={() => this.getList("store")}
                type="button"
              >
                <img
                  src={store}
                  alt=""
                  style={{ marginRight: 10, height: 30 }}
                />
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
                  backgroundColor: this.state.isColor.consumer,
                }}
                onClick={() => this.getList("consumer")}
                type="button"
              >
                Consumer
                <img
                  src={consumer}
                  alt=""
                  style={{ marginLeft: 10, height: 30 }}
                />
              </button>
            </div>
          </div>
          <Link to={"/TrackingBoard"}>
            <Button
              label={`Tracking Dashboard`}
              color={"#333d79ff"}
              className="loginButton"
            />
          </Link>
        </Layout>
      </div>
    );
  }
}

export default AdminDashboard;
