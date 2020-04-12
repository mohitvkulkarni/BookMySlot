import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import CustomerCard from "./CustomerCard";
import user from "../assets/images/user.png";

class CustomerList extends React.Component {
  render() {
    return (
      <div>
        <div className="customerStoreListDiv">
          {this.props.customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              name={customer.name}
              address={customer.address}
              contact={customer.contact}
              img={user}
            ></CustomerCard>
          ))}
        </div>
      </div>
    );
  }
}

export default CustomerList;
