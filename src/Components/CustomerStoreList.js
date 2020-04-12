import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import CustomerStore from "./CustomerStore";
import { Link } from "react-router-dom";
import shop from "../assets/images/shop.png";
import doctor from "../assets/images/doctor.png";

class CustomerStoreList extends React.Component {
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
            {this.props.stores.map((store) => (
              <Link to={`/CustomerStoreDetail/${store.id}`}>
                <CustomerStore
                  key={store.id}
                  name={store.name}
                  address={store.address}
                  type={store.type}
                  img={store.type === "Medical Store" ? doctor : shop}
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
