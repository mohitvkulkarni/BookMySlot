import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link, Redirect } from "react-router-dom";
import CustomerTimeSlot from "../Components/CustomerTimeSlot";
import supermarket from "../assets/images/supermarket.png";

class CustomerStoreDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          name: "Rahul General Store",
          address: "Gali no. 16, Boriyabandar",
          type: "Grocery Store",
          id: 1,
          contact: "9876543210",
          slotList: [
            {
              slotTime: "9.00 am - 10.00 am",
              slotAvailability: "10/15",
              id: 1,
            },
            {
              slotTime: "10.00 am - 11.00 am",
              slotAvailability: "4/15",
              id: 2,
            },
            {
              slotTime: "11.00 am - 12.00 am",
              slotAvailability: "1/15",
              id: 3,
            },
          ],
        },
        {
          name: "Mohit Medical Store",
          address: "Gali no. 18, Boriyabandar",
          type: "Medical Store",
          id: 2,
          contact: "0123456789",
          slotList: [
            {
              slotTime: "9.00 am - 10.00 am",
              slotAvailability: "10/15",
              id: 1,
            },
            {
              slotTime: "10.00 am - 11.00 am",
              slotAvailability: "4/15",
              id: 2,
            },
            {
              slotTime: "11.00 am - 12.00 am",
              slotAvailability: "1/15",
              id: 3,
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {}

  // handleBookButtonClick = () => <Redirect push to="/BookingSuccessful" />

  componentWillUnmount() {}
  render() {
    const storeId = this.props.match.params.id;
    const store = this.state.stores.filter(function (x) {
      return x.id == storeId;
    });
    console.log(store);
    return (
      <div>
        <Layout>
          <Header />
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="cardTile col-11 row">
              <div className="col-4 centerDiv">
                <img alt="" src={supermarket} style={{ height: 100 }} />
              </div>
              <div className="col-7" style={{ textAlign: "left" }}>
                <div>{store[0].name}</div>
                <div>{store[0].address}</div>
                <div>{store[0].contact}</div>
                <div>{store[0].type}</div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ color: "#414157" }}>AVAILABLE SLOTS</h3>
            <div className="slotListDiv">
              <div className="customerStoreListDiv">
                {store[0].slotList.map((slot) => (
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
