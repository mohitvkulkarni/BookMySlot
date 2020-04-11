import React from "react";
import SelectSearch from "react-select-search";

const Searchbar = () => {
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
  ];

  return (
    <SelectSearch
      options={options}
      defaultValue="sv"
      name="language"
      placeholder="Choose your language"
    />
  );
};

export default Searchbar;
