import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import SuccessfullContainer from "../Components/SuccessfullContainer";
import tickDeposit from "../assets/images/tickDeposit.png";
import Header from "../Components/Header";

class BookingSuccessful extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header name="Booking Successful!" headerImage = "tickDeposit" />
          <br />
          <br />
          <div>Your Unique ID for this booking is ADAJH6.</div>
          <SuccessfullContainer borderColor={"#35c635"} imgPath={tickDeposit} />
        </Layout>
      </div>
    );
  }
}

export default BookingSuccessful;
