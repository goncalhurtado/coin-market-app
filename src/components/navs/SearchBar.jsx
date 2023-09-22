import React, { useState } from "react";
import { dbCoins } from "../../db/dbToTest";

const SearchBar = ({ setSearch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    // let searchTerm = e.target.value;

    // const filteredResults = dbcoins.filter((coin) =>
    //   coin.id.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setSearch(filteredResults);
  };
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
