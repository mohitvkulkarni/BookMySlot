import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import CustomerTimeSlot from "../Components/CustomerTimeSlot";

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
            },
            {
              slotTime: "10.00 am - 11.00 am",
              slotAvailability: "4/15",
            },
            {
              slotTime: "11.00 am - 12.00 am",
              slotAvailability: "1/15",
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
            },
            {
              slotTime: "10.00 am - 11.00 am",
              slotAvailability: "4/15",
            },
            {
              slotTime: "11.00 am - 12.00 am",
              slotAvailability: "1/15",
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {}

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
          
            <div>{store[0].name}</div>
            <div>{store[0].address}</div>
            <div>{store[0].contact}</div>
            <div>{store[0].type}</div>
       




            <div>
            <h3 style={{ color: "#1f1e2f" }}>
              <b>Today's Slots</b>
            </h3>
            <div className="slotListDiv">
              
            <div className="customerStoreListDiv">
            {store[0].slotList.map((slot, index) => (
                <CustomerTimeSlot
                  key={index}
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
