import React, { useState } from "react";
import SearchInput, { createFilter } from "react-search-input";

// import emails from "./mails";

//const KEYS_TO_FILTERS = ["user.name", "subject", "dest.name"];
import CustomerStoreList from "../Components/CustomerStoreList";

const CustomerSearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  const filteredStores = props.stores.filter(
    createFilter(searchTerm, props.keys_to_filter)
  );

  return (
    <div style={{ margin: 15 }}>
      <SearchInput className="search-input" onChange={searchUpdated} />
      <hr />
      <div>
        <div className="row">
          <div>
            <h3 style={{ color: "#333d79ff" }}>AVAILABLE STORES</h3>
          </div>
        </div>
        <div className="slotListDiv">
          <CustomerStoreList stores={filteredStores}></CustomerStoreList>
        </div>
      </div>

      {
        console.log(filteredStores)

        /* {filteredEmails.map((email) => {
        return (
          <div className="mail" key={email.id}>
            <div className="from">{email.user.name}</div>
            <div className="subject">{email.subject}</div>
          </div>
        );
      })} */
      }
    </div>
  );
};

export default CustomerSearchBar;
