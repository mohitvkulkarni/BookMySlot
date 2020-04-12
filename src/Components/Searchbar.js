import React, { useState } from "react";
import SearchInput from "react-search-input";

// import emails from "./mails";

//const KEYS_TO_FILTERS = ["user.name", "subject", "dest.name"];

const Searchbar = () => {
  // eslint-disable-next-line
  const [searchTerm, setSearchTerm] = useState("");

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  // const filteredEmails = emails.filter(
  //   createFilter(searchTerm, KEYS_TO_FILTERS)
  // );

  return (
    <div style={{ margin: 15 }}>
      <SearchInput className="search-input" onChange={searchUpdated} />
      {/* {filteredEmails.map((email) => {
        return (
          <div className="mail" key={email.id}>
            <div className="from">{email.user.name}</div>
            <div className="subject">{email.subject}</div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Searchbar;
