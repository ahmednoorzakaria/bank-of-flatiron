import React, { useState, useEffect } from "react";
import Table from "./Table";
import Adddata from "./Adddata";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch data based on the search query
  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((r) => r.json())
    .then((data)=>setData(data))
  },[query])

  function handleSearch(e) {
    setQuery(e.target.value);
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
      />
      <span className="input-group-text border-0" id="search-addon"></span>
      <Adddata />
      <Table data={data} />
    </div>
  );
}

export default Search;
