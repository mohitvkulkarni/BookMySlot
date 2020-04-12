import React, { useState } from "react";
import SearchInput, { createFilter } from "react-search-input";

const AdminSearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  let filteredList = props.content.filter(
    createFilter(searchTerm, props.keys_to_filter)
  );

  const searchUpdated = (term) => {
    setSearchTerm(term);
    filteredList = props.content.filter(
      createFilter(term, props.keys_to_filter)
    );
    props.changeFilteredResults(filteredList);
  };

  return (
    <div style={{ margin: 15 }}>
      <SearchInput className="search-input" onChange={searchUpdated} />

      {
        //console.log(filteredStores)
        //props.changeFilteredResults(filteredStores)
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

export default AdminSearchBar;
