import React, { useState, useEffect } from "react";
import Table from "./Table";
import Adddata from "./Adddata";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch data based on the search query
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/transactions?q=" + query
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [query]);

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
