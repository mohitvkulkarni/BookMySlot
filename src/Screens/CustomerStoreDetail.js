import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link, Redirect } from "react-router-dom";
import CustomerTimeSlot from "../Components/CustomerTimeSlot";
import supermarket from "../assets/images/supermarket.png";
import doctor from "../assets/images/doctor.png";

class CustomerStoreDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        slotList: [],
      },
    };
  }

  componentDidMount() {
    fetch("http://b9da7878.ngrok.io/stores/" + this.props.match.params.id)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ store: res });
        console.log(this.state.store.slotList);
      });
  }

  // handleBookButtonClick = () => <Redirect push to="/BookingSuccessful" />

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name="Customer Dashboard" headerImage="customer" />
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="cardTile col-11 row">
              <div className="col-4 centerDiv">
                <img
                  alt=""
                  src={
                    this.state.store.type == "Medical store"
                      ? doctor
                      : supermarket
                  }
                  style={{ height: 100 }}
                />
              </div>
              <div className="col-7" style={{ textAlign: "left" }}>
                <div>
                  <b>{this.state.store.name}</b>
                </div>
                <div>{this.state.store.address}</div>
                <div>{this.state.store.contact}</div>
                <div>{this.state.store.type}</div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ color: "#333d79ff" }}>AVAILABLE SLOTS</h3>
            <div className="slotListDiv">
              <div className="customerStoreListDiv">
                {this.state.store.slotList.map((slot) => (
                  <CustomerTimeSlot
                    key={slot.id}
                    slotAvailability={slot.slotAvailability}
                    slotTime={slot.slotTime}
                  ></CustomerTimeSlot>
                ))}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default CustomerStoreDetail;
