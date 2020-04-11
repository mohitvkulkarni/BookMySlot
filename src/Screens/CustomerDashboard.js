import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import "../Styles/stylesSearchBar.css";
import CustomerStoreList from "../Components/CustomerStoreList";

class CustomerDashboard extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div >
        <Layout>
          <Header />
          <div style={{ marginTop: "2rem", textAlign: "initial" }}>
            <div className="col-12">
              <Searchbar />

            </div>
            <hr />
            <div>
                <CustomerStoreList></CustomerStoreList>
            </div>
            </div>
    
        </Layout>
      </div>
    );
  }
}

export default CustomerDashboard;
