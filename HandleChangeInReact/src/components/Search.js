import React from "react";
import CustomerList from "./Customer";
import List from "../constants/List";

function SearchCustomer() {
  const [inpSearch, setInpSearch] = React.useState("");
  const searchedResults = List.filter((ele) => {
    return ele.name.toLowerCase().includes(inpSearch.toLowerCase());
  });

  return (
    <>
      <div className="layout-row align-items-center justify-content-center mt-30">
        <input
          className="large mx-20 w-20"
          data-testid="search-input"
          value={inpSearch}
          placeholder="Enter search term (Eg: Phil)"
          onChange={(e) => setInpSearch(e.target.value.toLowerCase())}
        />
      </div>
      <CustomerList customers={searchedResults} />
    </>
  );
}

export default SearchCustomer;
