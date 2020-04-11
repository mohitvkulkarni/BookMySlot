import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import ChooseMethodList from "../Components/ChooseMethodList";
import withdrawFunds from "../assets/images/withdrawFunds.png";
import BackButton from "../Components/BackButton";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

class WithdrawToScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"/Dashboard"} />
          <div className="headerPages">Withdraw funds</div>
          <Link to="/Withdraw">
            <ChooseMethodList
              borderColor={"#E9E8EC"}
              typeDescription={`Zero Fees, No Limt, Arrives, Instantly`}
              typeName={"ACH"}
              typeImage={withdrawFunds}
            />
          </Link>
        </Layout>
      </div>
    );
  }
}

export default WithdrawToScreen;
