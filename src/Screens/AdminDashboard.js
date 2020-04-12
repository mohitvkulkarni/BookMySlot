import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import StatsCard from "../Components/StatsCard";
import AdminSearchBar from "../Components/AdminSearchBar";
import consumer from "../assets/images/consumer.png";
import store from "../assets/images/store.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import CustomerStoreList from "../Components/CustomerStoreList";
import CustomerList from "../Components/CustomerList";

class AdminDashboard extends React.Component {
  state = {
    filteredList:[],
    keys_to_filter: ["name"],
    stores: [],
    customers: [],
    isStore: true,
    isColor: {
      store: "#d3d3d3",
      consumer: "",
    },
  };

  getList = (type) => {
    switch (type) {
      case "store":
        this.setState({
          isStore: true,
          filteredList: this.state.stores,
          isColor: {
            store: "#d3d3d3",
            consumer: "",
          },
        });
        break;
      case "consumer":
        this.setState({
          isStore: false,
          filteredList: this.state.customers,
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

  componentDidMount() {
    fetch("http://b9da7878.ngrok.io/stores")
      .then(res => res.json())
      .then(res => {
        this.setState({ stores: res, filteredList: res });
        //console.log(this.state.stores);
      });

    fetch("http://b9da7878.ngrok.io/customers")
      .then(res => res.json())
      .then(res => {
        this.setState({ customers: res });
        //console.log(this.state.customers);
      });


  }

  changeFilteredResults = (filteredResults) => {

    console.log(filteredResults);
    this.setState({ filteredList: filteredResults });
    

  }

  componentWillUnmount() { }
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
            <AdminSearchBar content={this.state.isStore == true?this.state.stores:this.state.customers} keys_to_filter={this.state.keys_to_filter} changeFilteredResults={this.changeFilteredResults} />
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
          <hr />
          <div>
            <div className="row">
              <div>
                <h3 style={{ color: "#333d79ff" }}>AVAILABLE STORES</h3>
              </div>
            </div>
            <div className="slotListDiv">
              {this.state.isStore?<CustomerStoreList stores={this.state.filteredList}></CustomerStoreList>:<CustomerList customers={this.state.filteredList}></CustomerList>}
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
