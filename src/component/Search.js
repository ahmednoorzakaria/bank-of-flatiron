import React, { useState } from "react";
import Table from "./Table";
import Adddata from "./Adddata";

function Search() {
  const [data, setData] = useState([]);
  const [query, setquery] = useState("");

  function handleSearch(e) {
    setquery(e.target.value);
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={handleSearch}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
      />
      <span className="input-group-text border-0" id="search-addon"></span>
      <Adddata />

      <Table data={data} />
    </div>
  );
}

export default Search;
