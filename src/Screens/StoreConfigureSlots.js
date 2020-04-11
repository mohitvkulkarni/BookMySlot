import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

class StoreConfigureSlots extends React.Component {
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
           Configure Slots
        </div>

        <ul>
                <li>Shop Timing</li>
                <li>Slot Duration</li>
                <li>Max. No. of customers in time slot</li>
                <li>Available goods with Quantity</li>
            </ul>

            <Link to={"/StoreDashboard"}>
             <Button
                  label={`Submit`}
                  color={"#5669F0"}
                  className="loginButton"
                />
            </Link>

        </Layout>
      </div>
    );
  }
}

export default StoreConfigureSlots;
