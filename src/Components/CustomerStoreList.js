import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import CustomerStore from "./CustomerStore";

class CustomerStoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          name: "Rahul General Store",
          address: "Gali no. 16, Boriyabandar",
          type: "Grocery Store",
        },
        {
          name: "Mohit Medical Store",
          address: "Gali no. 18, Boriyabandar",
          type: "Medical Store",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
              <div>
            <h3 style={{ color: "#1f1e2f" }}>
              <b>Available Stores</b>
            </h3>
            </div>
          </div>
          <div className="customerStoreListDiv">
            {this.state.stores.map((store) => (
              <CustomerStore
                name={store.name}
                address={store.address}
                type={store.type}
              ></CustomerStore>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerStoreList;
