import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import CustomerSearchBar from "../Components/CustomerSearchBar";
import "../Styles/stylesSearchBar.css";

class CustomerDashboard extends React.Component {
  state = {
    stores: [],
    keys_to_filter: ["name"],
  };

  componentDidMount() {
    
    fetch("http://52.14.113.106:3002/stores" )
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
              <CustomerSearchBar
                stores={this.state.stores}
                keys_to_filter={this.state.keys_to_filter}
              />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default CustomerDashboard;
