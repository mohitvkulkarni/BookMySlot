import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import ChooseMethodList from "../Components/ChooseMethodList";
import DebitCard from "../assets/images/DebitCard.png";
import BackButton from "../Components/BackButton";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

class DeopsitsViaScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"/Dashboard"} />
          <div className="headerPages">Deposit</div>
          <Link to="/Deposit">
            <ChooseMethodList
              borderColor={"#75DAAD"}
              typeDescription={`$250 Deposit Limit, No Limit, 
              Arrives Instantly - US Only`}
              typeName={"Debit Card"}
              typeImage={DebitCard}
            />
          </Link>
        </Layout>
      </div>
    );
  }
}

export default DeopsitsViaScreen;
