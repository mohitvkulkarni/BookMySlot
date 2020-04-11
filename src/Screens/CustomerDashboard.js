import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

class CustomerDashboard extends React.Component {
  state = {
    
  };

  componentDidMount() {
   
  }

  componentWillUnmount() {
    
  }
  render() {
    return (
      <div>
        <Layout>
          <Header />
        <div>
           Customer Dashboard
        </div>
        </Layout>
      </div>
    );
  }
}

export default CustomerDashboard;
