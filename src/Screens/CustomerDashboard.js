import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import CustomerSearchBar from "../Components/CustomerSearchBar";
=======
import Searchbar from "../Components/Searchbar";
>>>>>>> da73c1f8f98164b51688f9490d261f26106cb35f
import "../Styles/stylesSearchBar.css";
import CustomerStoreList from "../Components/CustomerStoreList";

class CustomerDashboard extends React.Component {
  state = {

    stores:[],
    keys_to_filter:["name"]
  };

  componentDidMount() {

    fetch("http://b9da7878.ngrok.io/stores" )
    .then(res => res.json())
    .then(res => {
      this.setState({ stores: res });
        console.log(this.state.stores);
      });
  }

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name="Customer Dashboard" headerImage="customer" />
          <div style={{ marginTop: "2rem", textAlign: "initial" }}>
            <div className="col-12">
            <CustomerSearchBar stores ={this.state.stores} keys_to_filter={this.state.keys_to_filter} />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default CustomerDashboard;
