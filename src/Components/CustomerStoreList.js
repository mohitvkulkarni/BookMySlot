import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import CustomerStore from "./CustomerStore";
import { Link } from "react-router-dom";

class CustomerStoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          name: "Rahul General Store",
          address: "Gali no. 16, Boriyabandar",
          type: "Grocery Store",
          id: 1,
        },
        {
          name: "Mohit Medical Store",
          address: "Gali no. 18, Boriyabandar",
          type: "Medical Store",
          id: 2,
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
              <h3 style={{ color: "#333d79ff" }}>AVAILABLE STORES</h3>
            </div>
          </div>
          <div className="customerStoreListDiv">
            {this.state.stores.map((store) => (
              <Link to={`/CustomerStoreDetail/${store.id}`}>
                <CustomerStore
                  key={store.id}
                  name={store.name}
                  address={store.address}
                  type={store.type}
                ></CustomerStore>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerStoreList;
