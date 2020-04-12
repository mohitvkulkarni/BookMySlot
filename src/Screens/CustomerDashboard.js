import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import Searchbar from "../Components/Searchbar";
import "../Styles/stylesSearchBar.css";
import CustomerStoreList from "../Components/CustomerStoreList";

class CustomerDashboard extends React.Component {
  state = {
    stores: [],
  };

  componentDidMount() {
    fetch("http://b9da7878.ngrok.io/stores")
      .then((res) => res.json())
      .then((res) => {
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
              <Searchbar />
            </div>
            <hr />
            <div>
              <CustomerStoreList stores={this.state.stores}></CustomerStoreList>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default CustomerDashboard;
