import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import CustomerCard from "./CustomerCard";
import { Link } from "react-router-dom";
import shop from "../assets/images/shop.png";
import doctor from "../assets/images/doctor.png";

class CustomerList extends React.Component {
  render() {
    return (

        <div>
          <div className="customerStoreListDiv">
            {this.props.customers.map((customer) => (
              <Link to={`/CustomerStoreDetail/${customer.id}`}>
                <CustomerCard
                  key={customer.id}
                  name={customer.name}
                  address={customer.address}
                  contact={customer.contact}
                  img={shop}
                ></CustomerCard>
              </Link>
            ))}
          </div>
        </div>

    );
  }
}

export default CustomerList;
